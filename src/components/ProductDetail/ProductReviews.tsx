import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendEmail } from '../../services/emailService';

export interface ProductReviewItem {
  id: string;
  productId: string;
  name: string;
  email: string;
  rating: number;
  review: string;
  createdAt: string;
}

interface ProductReviewsProps {
  productId?: string;
  productTitle: string;
  onReviewCountChange?: (count: number) => void;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({
  productId,
  productTitle,
  onReviewCountChange,
}) => {
  const storageKey = `webplanets_reviews_${productId || productTitle.replace(/\s+/g, '_')}`;

  // Reviews state (persisted to localStorage)
  const [reviews, setReviews] = useState<ProductReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Form input state
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState(() => localStorage.getItem('webplanets_saved_reviewer_name') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('webplanets_saved_reviewer_email') || '');
  const [saveDetails, setSaveDetails] = useState(() => localStorage.getItem('webplanets_saved_reviewer_pref') !== 'false');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync reviews if product changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      const parsed: ProductReviewItem[] = saved ? JSON.parse(saved) : [];
      setReviews(parsed);
      onReviewCountChange?.(parsed.length);
    } catch {
      setReviews([]);
      onReviewCountChange?.(0);
    }
  }, [storageKey, onReviewCountChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validation
    if (rating === 0) {
      setErrorMessage('Please select a rating by clicking on the stars.');
      return;
    }

    if (!review.trim()) {
      setErrorMessage('Please enter your review.');
      return;
    }

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Dispatch review details to email via emailService
      const emailResponse = await sendEmail({
        name: name.trim(),
        email: email.trim(),
        subject: `New Review (${rating} Stars) for "${productTitle}"`,
        message: `A new customer review has been submitted on the website:\n\n` +
          `Product: ${productTitle}\n` +
          `Rating: ${rating} / 5 Stars\n` +
          `Reviewer Name: ${name.trim()}\n` +
          `Reviewer Email: ${email.trim()}\n` +
          `Date: ${new Date().toLocaleString()}\n\n` +
          `Customer Review:\n"${review.trim()}"`,
        product: productTitle,
        rating: `${rating} / 5 Stars`,
        review: review.trim(),
        from_name: 'Pixfix Digital Product Reviews',
      });

      if (!emailResponse.success) {
        setErrorMessage(
          emailResponse.message || 'Failed to deliver the review to email. Please try again.'
        );
        setIsSubmitting(false);
        return;
      }

      // 2. Save user preference for name & email in localStorage if checked
      if (saveDetails) {
        localStorage.setItem('webplanets_saved_reviewer_name', name.trim());
        localStorage.setItem('webplanets_saved_reviewer_email', email.trim());
        localStorage.setItem('webplanets_saved_reviewer_pref', 'true');
      } else {
        localStorage.removeItem('webplanets_saved_reviewer_name');
        localStorage.removeItem('webplanets_saved_reviewer_email');
        localStorage.setItem('webplanets_saved_reviewer_pref', 'false');
      }

      // 3. Create and store review item
      const newReview: ProductReviewItem = {
        id: Date.now().toString(),
        productId: productId || 'default',
        name: name.trim(),
        email: email.trim(),
        rating,
        review: review.trim(),
        createdAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };

      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem(storageKey, JSON.stringify(updatedReviews));
      onReviewCountChange?.(updatedReviews.length);

      // 4. Reset review field & rating
      setReview('');
      setRating(0);
      setHoverRating(0);
      if (!saveDetails) {
        setName('');
        setEmail('');
      }

      setSuccessMessage('Thank you! Your review has been submitted and sent to our team.');
    } catch (err) {
      console.error('Review submit error:', err);
      setErrorMessage('An unexpected error occurred while submitting your review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full text-left">
      {/* Existing Reviews List */}
      {reviews.length > 0 ? (
        <div className="mb-10 space-y-5">
          <h3 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-3">
            {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'} for &ldquo;{productTitle}&rdquo;
          </h3>

          <div className="divide-y divide-gray-100">
            {reviews.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0 border border-gray-200">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                    <span className="text-xs text-gray-400">{item.createdAt}</span>
                  </div>

                  <div className="flex items-center gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= item.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300'
                        }`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <p className="text-[13.5px] text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-[14px] text-gray-600 mb-6 font-normal">There are no reviews yet.</p>
      )}

      {/* Review Submission Card Form */}
      <div className="border border-gray-200 bg-[#fafafa]/50 sm:bg-white p-6 sm:p-8 rounded-[2px]">
        <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-800 mb-1 leading-snug">
          {reviews.length === 0
            ? `Be the first to review “${productTitle}”`
            : `Add a review`}
        </h3>

        <p className="text-[12.5px] sm:text-[13px] text-gray-500 mb-5">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* Success Alert */}
        {successMessage && (
          <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-xs sm:text-sm flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Star Rating Row */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[13.5px] font-medium text-gray-700">Your rating *</span>
            <div
              className="flex items-center gap-0.5"
              onMouseLeave={() => setHoverRating(0)}
              role="radiogroup"
              aria-label="Star Rating"
            >
              {[1, 2, 3, 4, 5].map((s) => {
                const isFilled = (hoverRating || rating) >= s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    onMouseEnter={() => setHoverRating(s)}
                    className="p-0.5 text-gray-400 hover:text-amber-500 transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
                    aria-label={`${s} star${s > 1 ? 's' : ''}`}
                    title={`${s} Star${s > 1 ? 's' : ''}`}
                  >
                    <Star
                      className={`w-[18px] h-[18px] transition-colors ${
                        isFilled
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-400 hover:text-amber-400'
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                );
              })}
            </div>
            {rating > 0 && (
              <span className="text-xs text-gray-500 font-medium ml-1">
                ({rating}/5)
              </span>
            )}
          </div>

          {/* Your Review Textarea */}
          <div className="mb-4">
            <label htmlFor="review" className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
              Your review *
            </label>
            <textarea
              id="review"
              name="review"
              required
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-[2px] p-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:outline-none transition-colors resize-y"
            />
          </div>

          {/* Name & Email Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="reviewer-name" className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                Name *
              </label>
              <input
                id="reviewer-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-[2px] px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="reviewer-email" className="block text-[13.5px] font-medium text-gray-700 mb-1.5">
                Email *
              </label>
              <input
                id="reviewer-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-[2px] px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Save Info Checkbox */}
          <div className="flex items-start gap-2.5 mb-6">
            <input
              id="save-info"
              type="checkbox"
              checked={saveDetails}
              onChange={(e) => setSaveDetails(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0284c7] focus:ring-[#0284c7] cursor-pointer"
            />
            <label
              htmlFor="save-info"
              className="text-[13px] text-gray-600 leading-snug cursor-pointer select-none"
            >
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer border-none shadow-none flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>SUBMITTING...</span>
                </>
              ) : (
                <span>SUBMIT</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
