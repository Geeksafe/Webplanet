// Global analytics helper for Google Ads and tracking

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Report Google Ads Conversion
 */
export function trackGoogleConversion(
  sendTo: string = 'AW-18483112865/pZasCKC6lZ4dEKHXt-1E',
  value: number = 1.0,
  currency: string = 'INR'
): void {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: sendTo,
        value: value,
        currency: currency,
      });
    }
  } catch (error) {
    console.warn('[Analytics] Google Ads tracking error:', error);
  }
}

/**
 * Track Contact Form Submission Conversion for Google Ads (AW-18483112865)
 */
export function trackContactConversion(): void {
  trackGoogleConversion('AW-18483112865/pZasCKC6lZ4dEKHXt-1E', 1.0, 'INR');
}
