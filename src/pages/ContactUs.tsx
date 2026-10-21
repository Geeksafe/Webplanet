import React from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import {
  ContactHero,
  ContactCards,
  ContactFormSection,
} from '../components/ContactUs';

interface ContactUsProps {
  onNavigate: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      {/* 1. TOP NAVBAR (Existing Header component) */}
      <Header onNavigate={onNavigate} currentPage="contact" />

      {/* 2. MAIN CONTACT CONTENT */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <ContactHero />

        {/* Section 2: Contact Info Cards */}
        <ContactCards />

        {/* Section 3: Contact Form & Info */}
        <ContactFormSection />
      </main>

      {/* 3. FLOATING CART BADGE */}
      <FloatingCart />

      {/* 4. FOOTER (Existing Footer component) */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContactUs;
