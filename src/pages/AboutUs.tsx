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
      {/* 1. TOP NAVBAR (Existing Header component) */}
      <Header onNavigate={onNavigate} currentPage="about" />

      {/* 2. MAIN ABOUT CONTENT */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <AboutHero />

        {/* Section 2: Print Specialists */}
        <PrintSpecialists />

        {/* Section 3: What We Do */}
        <WhatWeDo />

        {/* Section 4: CTA */}
        <AboutCta onNavigate={onNavigate} />
      </main>

      {/* 3. FLOATING CART BADGE */}
      <FloatingCart />

      {/* 4. FOOTER (Existing Footer component) */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutUs;
