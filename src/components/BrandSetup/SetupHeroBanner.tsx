import React, { useState } from 'react';
import type { BrandSetupConfig } from './types';

interface SetupHeroBannerProps {
  config: BrandSetupConfig;
  onNext?: (model: string) => void;
}

const SetupHeroBanner: React.FC<SetupHeroBannerProps> = ({ config, onNext }) => {
  const [productQuery, setProductQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredModels = config.sampleModels.filter((model) =>
    model.toLowerCase().includes(productQuery.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const model = productQuery.trim() || config.sampleModels[0];
    onNext?.(model);
  };

  const handleSelectSuggestion = (model: string) => {
    setProductQuery(model);
    setShowSuggestions(false);
    onNext?.(model);
  };

  return (
    <section className="relative overflow-hidden w-full text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center select-none"
        style={{
          backgroundImage: `url('/setup/printers_blue_banner.png')`,
        }}
      />

      <div 
        className="absolute inset-0"
        style={{ background: config.overlayStyle }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold text-white tracking-tight leading-tight mb-4">
              {config.heroTitle}
            </h1>
            
            <p className="text-[14px] sm:text-[16px] text-white/90 leading-relaxed max-w-[560px] mb-8 font-normal">
              {config.heroSubtitle}
            </p>

            <div className="w-full max-w-[520px] relative">
              <form onSubmit={handleSearchSubmit} className="flex flex-col items-start gap-4 w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={productQuery}
                    onChange={(e) => {
                      setProductQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Enter Your product Name Here"
                    className="w-full bg-white text-gray-900 placeholder:text-gray-500 rounded px-4 py-3.5 text-[14px] sm:text-[15px] outline-none shadow-md border border-transparent focus:border-white focus:ring-2 focus:ring-blue-300 transition-all"
                  />

                  {showSuggestions && productQuery.trim().length > 0 && filteredModels.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white text-gray-800 rounded-md shadow-xl border border-gray-200 z-30 max-h-56 overflow-y-auto">
                      <div className="p-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Suggested {config.brandName} Models
                      </div>
                      {filteredModels.map((model, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectSuggestion(model)}
                          className="w-full text-left px-3.5 py-2.5 text-[13.5px] hover:bg-gray-100 transition-colors flex items-center justify-between border-none bg-transparent cursor-pointer text-gray-700"
                        >
                          <span>{model}</span>
                          <span className="text-[11px] text-blue-600 font-medium">Select & Next &rarr;</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`px-8 py-3 rounded text-[14px] font-bold uppercase tracking-wider text-white ${config.buttonBg} ${config.buttonHoverBg} transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer border-none flex items-center justify-center gap-2`}
                >
                  NEXT
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <img
                src={config.heroPrinterImage}
                alt={config.heroPrinterAlt}
                className="max-h-[280px] sm:max-h-[350px] lg:max-h-[380px] w-auto object-contain drop-shadow-2xl select-none transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupHeroBanner;
