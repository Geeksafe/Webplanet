import React from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import {
  AboutHero,
  PrintSpecialists,
  WhatWeDo,
  AboutCta,
} from '../components/AboutUs';

interface AboutUsProps {
  onNavigate: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage="about" />

      <main className="flex-1 w-full">
        <AboutHero />

        <PrintSpecialists />

        <WhatWeDo />

        <AboutCta onNavigate={onNavigate} />
      </main>

      <FloatingCart />

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutUs;
