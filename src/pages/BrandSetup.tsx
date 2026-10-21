import React, { useState, useEffect } from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import {
  BrandSubBar,
  SetupHeroBanner,
  DownloadHeroBanner,
  DownloadDriversModal,
  InstallationErrorCard,
  SetupInstructions,
  SetupSupportForm,
  BrandSwitcher,
  brandSetupConfigs,
  type BrandId,
  type DriverFormData,
} from '../components/BrandSetup';

interface BrandSetupProps {
  brand: BrandId;
  onNavigate: (page: 'home' | 'shop' | 'about' | 'contact') => void;
  onSelectBrand?: (brand: BrandId) => void;
  onSelectProduct?: (productId: string) => void;
}

type SetupStep = 'setup' | 'download' | 'error';

const BrandSetup: React.FC<BrandSetupProps> = ({
  brand = 'hp',
  onNavigate,
  onSelectBrand,
}) => {
  const config = brandSetupConfigs[brand] || brandSetupConfigs.hp;

  const [step, setStep] = useState<SetupStep>('setup');
  const [printerModel, setPrinterModel] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Reset steps when brand changes
  useEffect(() => {
    setStep('setup');
    setPrinterModel('');
    setIsModalOpen(false);
    setIsDownloading(false);
  }, [brand]);

  // Handle NEXT click from SetupHeroBanner
  const handleNextFromSetup = (model: string) => {
    setPrinterModel(model);
    setStep('download');
    setIsDownloading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle opening download modal
  const handleOpenDownloadModal = () => {
    setIsModalOpen(true);
  };

  // Handle modal submit: close modal, start progress bar in DownloadHeroBanner
  const handleModalSubmit = (data: DriverFormData) => {
    if (data.modelNumber) {
      setPrinterModel(data.modelNumber);
    }
    setIsModalOpen(false);
    setIsDownloading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle installation failure: transition to Image 4 Error Card
  const handleInstallationFailed = () => {
    setStep('error');
    setIsDownloading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restart flow
  const handleRestart = () => {
    setStep('setup');
    setIsDownloading(false);
    setIsModalOpen(false);
    setPrinterModel('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSupportLinkClick = () => {
    const formEl = document.getElementById('setup-contact-form');
    formEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      {/* 1. TOP NAVBAR (Untouched Header component) */}
      <Header onNavigate={onNavigate} currentPage="shop" />

      {/* 2. CENTERED BRAND LOGO SUB-BAR */}
      <BrandSubBar
        logoUrl={config.brandLogo}
        logoAlt={config.brandLogoAlt}
        heightClass={config.logoHeightClass}
      />

      {/* 3. HERO SECTION BASED ON CURRENT STEP */}
      {step === 'setup' && (
        <SetupHeroBanner
          config={config}
          onNext={handleNextFromSetup}
        />
      )}

      {step === 'download' && (
        <DownloadHeroBanner
          config={config}
          modelNumber={printerModel}
          isDownloading={isDownloading}
          onOpenModal={handleOpenDownloadModal}
          onInstallationFailed={handleInstallationFailed}
        />
      )}

      {step === 'error' && (
        <InstallationErrorCard
          config={config}
          onRestart={handleRestart}
        />
      )}

      {/* 4. MIDDLE CONTENT & SUPPORT FORM (Visible on setup and download steps) */}
      {step !== 'error' && (
        <main className="flex-1 max-w-[1240px] mx-auto w-full px-6 sm:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Instructions & Support Form */}
            <div className="lg:col-span-7 flex flex-col">
              <SetupInstructions
                installText={config.installText}
                helpText={config.helpText}
                showSupportLink={config.showSupportLink}
                supportLinkText={config.supportLinkText}
                onSupportLinkClick={handleSupportLinkClick}
              />

              <SetupSupportForm brandName={config.brandName} />
            </div>

            {/* Right Column: Secondary Content Printer Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
              <div className="max-w-[420px] w-full flex items-center justify-center">
                <img
                  src={config.contentPrinterImage}
                  alt={config.contentPrinterAlt}
                  className="max-h-[300px] sm:max-h-[340px] w-auto object-contain select-none transition-transform duration-300 hover:scale-103"
                />
              </div>
            </div>
          </div>

          {/* Brand Switcher Bar */}
          <BrandSwitcher activeBrand={brand} onSelectBrand={onSelectBrand} />
        </main>
      )}

      {/* 5. DRIVER DOWNLOAD MODAL (Image 2) */}
      <DownloadDriversModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        defaultModel={printerModel}
      />

      {/* 6. FLOATING CART BUTTON */}
      <FloatingCart />

      {/* 7. FOOTER (Untouched Footer component) */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default BrandSetup;
