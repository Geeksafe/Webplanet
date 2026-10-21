import React from 'react';
import Header from '../components/auth/Header';
import Hero from '../components/Home/Hero';
import BrandSelection from '../components/Home/BrandSelection';
import Issues from '../components/Home/Issues';
import Services from '../components/Home/Services';
import About from '../components/Home/About';
import CtaSection from '../components/Home/CtaSection';
import Products from '../components/Home/Products';
import Mission from '../components/Home/Mission';
import FinalCta from '../components/Home/FinalCta';
import Footer from '../components/Home/Footer';
import type { BrandId } from '../components/BrandSetup';

interface HomeProps {
  onNavigate?: (page: any, category?: string | null) => void;
  onSelectBrand?: (brand: BrandId) => void;
  onSelectProduct?: (productId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectBrand, onSelectProduct }) => {
  return (
    <>
      <Header onNavigate={onNavigate} currentPage="home" />
      <Hero onNavigate={onNavigate} onSelectBrand={onSelectBrand} />
      <BrandSelection onNavigate={onNavigate} onSelectProduct={onSelectProduct} />
      <Issues />
      <Services onNavigate={onNavigate} />
      <About onNavigate={onNavigate} />
      <CtaSection onNavigate={onNavigate} />
      <Products onNavigate={onNavigate} />
      <Mission />
      <FinalCta onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Home;
