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
      <Header onNavigate={onNavigate} currentPage="contact" />

      <main className="flex-1 w-full">
        <ContactHero />

        <ContactCards />

        <ContactFormSection />
      </main>

      <FloatingCart />

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContactUs;
