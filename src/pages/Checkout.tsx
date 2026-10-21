import React, { useState } from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import { useCart } from '../components/Cart';
import { sendEmail } from '../services/emailService';
import { CheckCircle2, AlertCircle, Loader2, ArrowLeft, ShoppingBag } from 'lucide-react';
import type { NavPage } from '../types/navigation';

interface CheckoutProps {
  onNavigate: (page: NavPage | any, category?: string | null) => void;
}

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
  'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

interface OrderSuccessData {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  fullAddress: string;
  total: number;
  items: Array<{ id: string; title: string; price: number; quantity: number }>;
}

const Checkout: React.FC<CheckoutProps> = ({ onNavigate }) => {
  const { items, subtotal, total, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'United States (US)',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'Georgia',
    zipCode: '',
    phone: '',
    email: '',
    orderNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<OrderSuccessData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.streetAddress.trim() ||
      !formData.city.trim() ||
      !formData.zipCode.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      setErrorMessage('Please fill in all required billing fields marked with an asterisk (*).');
      return;
    }

    if (items.length === 0) {
      setErrorMessage('Your cart is empty. Please add products before placing an order.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const fullAddress = `${formData.streetAddress}${
      formData.apartment ? ', ' + formData.apartment : ''
    }, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`;

    const itemsSummary = items
      .map(
        (i) => `• ${i.title} × ${i.quantity} — $${(i.price * i.quantity).toFixed(2)}`
      )
      .join('\n');

    const emailMessage = `
NEW ORDER PLACED (CASH ON DELIVERY)
========================================
Order ID: ${orderId}
Date: ${new Date().toLocaleString()}
Payment Method: Cash on Delivery (COD)

CUSTOMER DETAILS:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}

DELIVERY ADDRESS:
${fullAddress}

ORDERED PRODUCTS:
${itemsSummary}

----------------------------------------
Subtotal: $${subtotal.toFixed(2)}
Total Amount Due: $${total.toFixed(2)} (Collect in Cash upon Delivery)
----------------------------------------

Customer Order Notes:
${formData.orderNotes.trim() || 'None provided'}
    `.trim();

    const result = await sendEmail({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      subject: `🛒 New Cash on Delivery Order - ${orderId} ($${total.toFixed(2)})`,
      message: emailMessage,
      order_id: orderId,
      customer_name: `${formData.firstName} ${formData.lastName}`.trim(),
      customer_email: formData.email,
      customer_phone: formData.phone,
      delivery_address: fullAddress,
      order_total: `$${total.toFixed(2)}`,
      payment_method: 'Cash on Delivery (COD)',
      items_summary: itemsSummary,
      order_notes: formData.orderNotes.trim() || 'None',
      from_name: 'Pixfix Orders Dispatch',
    });

    setIsSubmitting(false);

    if (result.success) {
      setOrderSuccess({
        orderId,
        customerName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        fullAddress,
        total,
        items: [...items],
      });
      clearCart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setErrorMessage(
        result.message ||
          'Failed to process your order. Please check your internet connection or try again.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      {/* 1. Header */}
      <Header onNavigate={onNavigate} currentPage="checkout" />

      {/* 2. Main Checkout Section */}
      <main className="flex-1 w-full bg-[#fcfcfc] py-8 sm:py-12 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="hover:text-black flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </button>
            <span>/</span>
            <span className="font-semibold text-gray-900">Checkout</span>
          </div>

          {/* STATE A: ORDER SUCCESS RECEIPT */}
          {orderSuccess ? (
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 sm:p-10 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                Order Placed Successfully!
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Thank you, <strong className="text-gray-800">{orderSuccess.customerName}</strong>! We have received your order details.
              </p>

              {/* Order Details Card */}
              <div className="bg-[#f8fafc] border border-gray-200/80 rounded-lg p-5 sm:p-6 text-left mb-6 text-xs sm:text-sm space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Order Number:</span>
                  <span className="font-bold text-gray-900">{orderSuccess.orderId}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Payment Method:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Cash on Delivery
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Total Amount Due:</span>
                  <span className="font-extrabold text-gray-900 text-base">
                    ${orderSuccess.total.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block mb-1">Delivery Address:</span>
                  <span className="text-gray-800 leading-relaxed block">
                    {orderSuccess.fullAddress}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 text-left mb-8">
                <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-3">
                  Ordered Items
                </h4>
                <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                  {orderSuccess.items.map((it) => (
                    <div key={it.id} className="py-2.5 flex justify-between items-center">
                      <span className="text-gray-800">
                        {it.title} <strong className="text-gray-500">× {it.quantity}</strong>
                      </span>
                      <span className="font-semibold text-gray-900">
                        ${(it.price * it.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className="w-full sm:w-auto px-8 py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer border-none"
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer border-none"
                >
                  Go to Home
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            /* STATE B: EMPTY CART NOTICE */
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-10 text-center">
              <div className="w-14 h-14 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
              <p className="text-gray-500 text-sm mb-6">
                Please add printers, scanners, or accessories to your cart before proceeding to checkout.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('shop')}
                className="px-6 py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer border-none"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            /* STATE C: TWO-COLUMN CHECKOUT FORM */
            <form onSubmit={handlePlaceOrder}>
              {errorMessage && (
                <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                  <div className="flex-1">
                    <p className="font-semibold">Unable to place order</p>
                    <p className="text-red-600 text-xs mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Honeypot field for anti-spam */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Billing details & Additional information */}
                <div className="lg:col-span-7 bg-white border border-gray-200/80 rounded-lg p-6 sm:p-8 shadow-2xs">
                  <h2 className="text-[22px] sm:text-[24px] font-bold text-gray-900 mb-6 tracking-tight">
                    Billing details
                  </h2>

                  <div className="space-y-4 text-left">
                    {/* First name & Last name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                          First name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                          Last name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Company name */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        Company name (optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                      />
                    </div>

                    {/* Country / Region */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        Country / Region <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white cursor-pointer"
                      >
                        <option value="United States (US)">United States (US)</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>

                    {/* Street address */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        Street address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        required
                        placeholder="House number and street name"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white mb-2.5"
                      />
                      <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                      />
                    </div>

                    {/* Town / City */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        Town / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white cursor-pointer"
                      >
                        {US_STATES.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* ZIP Code */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                      />
                    </div>

                    {/* Email address */}
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="mt-8 pt-6 border-t border-gray-100 text-left">
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-4 tracking-tight">
                      Additional information
                    </h3>
                    <div>
                      <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                        Order notes (optional)
                      </label>
                      <textarea
                        name="orderNotes"
                        rows={4}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        value={formData.orderNotes}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-[#0084d6] transition-all bg-white resize-y"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Right Column: Your order card */}
                <div className="lg:col-span-5 bg-white border border-gray-200/90 rounded-lg p-6 sm:p-7 shadow-2xs">
                  <h3 className="text-[20px] font-bold text-gray-900 mb-5 tracking-tight text-left">
                    Your order
                  </h3>

                  {/* Order Table */}
                  <div className="border-b border-gray-200 pb-2 mb-4 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-gray-600 font-bold pb-2 border-b border-gray-200">
                      <span>Product</span>
                      <span>Subtotal</span>
                    </div>

                    <div className="divide-y divide-gray-100">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="py-3 flex justify-between items-start gap-3 text-left"
                        >
                          <span className="text-gray-800 text-[13.5px] leading-snug">
                            {item.title} <strong className="text-gray-900 font-semibold">× {item.quantity}</strong>
                          </span>
                          <span className="text-gray-900 font-medium text-[13.5px] shrink-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Subtotal Row */}
                    <div className="py-3 flex justify-between items-center border-t border-gray-100 text-[13.5px]">
                      <span className="text-gray-700 font-medium">Subtotal</span>
                      <span className="font-semibold text-gray-900">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    {/* Total Row */}
                    <div className="py-3 flex justify-between items-center border-t border-gray-200 text-[15px]">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-extrabold text-gray-900 text-[17px]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Payment Method - Only Cash on Delivery */}
                  <div className="text-left pt-2 pb-5 border-b border-gray-100">
                    <label className="flex items-center gap-2.5 cursor-pointer font-semibold text-gray-800 text-[14px]">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked
                        readOnly
                        className="w-4 h-4 text-[#0084d6] focus:ring-[#0084d6]"
                      />
                      <span>Cash on delivery</span>
                    </label>

                    {/* COD Description Box */}
                    <div className="mt-2.5 p-3.5 bg-gray-100/90 rounded text-[13px] text-gray-600 leading-relaxed border border-gray-200/50">
                      Pay with cash upon delivery.
                    </div>
                  </div>

                  {/* Privacy Policy Note */}
                  <p className="text-[12px] text-gray-500 leading-relaxed text-left py-4 m-0">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('privacy-policy')}
                      className="text-gray-800 font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer text-[12px]"
                    >
                      privacy policy
                    </button>
                    .
                  </p>

                  {/* PLACE ORDER Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#0084d6] hover:bg-[#0071be] text-white font-bold text-[14px] uppercase tracking-wider rounded transition-colors duration-200 cursor-pointer border-none shadow-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>PLACING ORDER...</span>
                      </>
                    ) : (
                      'PLACE ORDER'
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* 3. Floating Cart */}
      <FloatingCart />

      {/* 4. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Checkout;
