export type NavPage =
  | 'home'
  | 'shop'
  | 'product'
  | 'setup'
  | 'about'
  | 'contact'
  | 'faq'
  | 'services'
  | 'privacy-policy'
  | 'terms-of-service'
  | 'refund-return'
  | 'warranty-info'
  | 'shipping-policy'
  | 'sitemap'
  | 'checkout';

export type NavigateFunction = (page: NavPage, category?: string | null) => void;
