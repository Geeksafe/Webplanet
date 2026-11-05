import React, { useState, useEffect } from 'react';
import type { BrandSetupConfig } from './types';

interface DownloadHeroBannerProps {
  config: BrandSetupConfig;
  modelNumber: string;
  isDownloading: boolean;
  onOpenModal: () => void;
  onInstallationFailed: () => void;
}

const DownloadHeroBanner: React.FC<DownloadHeroBannerProps> = ({
  config,
  modelNumber,
  isDownloading,
  onOpenModal,
  onInstallationFailed,
}) => {
  const [installProgress, setInstallProgress] = useState(0);
  const [showFailedText, setShowFailedText] = useState(false);

  useEffect(() => {
    if (!isDownloading) {
      setInstallProgress(0);
      setShowFailedText(false);
      return;
    }

    const interval = setInterval(() => {
      setInstallProgress((prev) => {
        if (prev >= 72) {
          clearInterval(interval);
          setShowFailedText(true);
          setTimeout(() => {
            onInstallationFailed();
          }, 1800);
          return 72;
        }
        const next = prev + (prev < 30 ? 6 : prev < 55 ? 4 : 2);
        return Math.min(next, 72);
      });
    }, 250);

    return () => clearInterval(interval);
  }, [isDownloading, onInstallationFailed]);

  return (
    <section className="relative overflow-hidden w-full text-white bg-[#0088d8] py-14 sm:py-20 lg:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 select-none"
        style={{
          backgroundImage: `url('/setup/printers_blue_banner.png')`,
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            {isDownloading ? (
              <div className="w-full max-w-[540px]">
                <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black text-white tracking-tight leading-tight mb-8">
                  Downloading {config.softwareName}
                </h1>

                <div className="mb-6">
                  <div className="text-[16px] font-bold text-white mb-2">
                    Downloading
                  </div>
                  <div className="w-full bg-[#002d72] h-5 rounded-xs overflow-hidden">
                    <div className="bg-[#002d72] w-full h-full"></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-[16px] font-bold text-white mb-2">
                    100%
                  </div>
                  <div className="w-full bg-[#dbe2e8] h-5 rounded-xs overflow-hidden flex">
                    <div 
                      className="bg-[#22c55e] h-full transition-all duration-300 ease-out"
                      style={{ width: `${installProgress}%` }}
                    />
                  </div>
                </div>

                {showFailedText && (
                  <div className="text-[17px] font-bold text-white mt-4 animate-fadeIn">
                    Installation Failed
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full max-w-[540px]">
                <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-6">
                  Download Your Software To Start Printing
                </h1>

                {modelNumber && (
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-md text-[13px] font-medium text-white mb-5">
                    Selected Model: {modelNumber}
                  </div>
                )}

                <div className="space-y-2 text-[15px] sm:text-[16px] text-white/95 mb-8">
                  <p className="m-0">1. Ensure your printer is powered on.</p>
                  <p className="m-0">
                    2. Click <span className="font-bold text-white">Download</span> to install the recommended printer software and complete the setup.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onOpenModal}
                  className="px-9 py-3.5 rounded-lg text-[15px] font-bold uppercase tracking-wider text-white bg-[#0057b8] hover:bg-[#00377d] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer border-none flex items-center justify-center gap-2"
                >
                  Download
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={config.downloadPrinterImage}
                alt={`${config.brandName} Printer with Test Print`}
                className="max-h-[300px] sm:max-h-[380px] w-auto object-contain drop-shadow-2xl rounded-lg select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadHeroBanner;
