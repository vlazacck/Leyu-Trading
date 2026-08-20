export interface SanityImage {
  asset: { _ref: string; _id?: string };
  alt?: string;
  url?: string;
}

export interface SeoData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: SanityImage;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  type: "flour" | "grain";
  variant: "white" | "brown";
  tagline: string;
  description: string;
  highlights: string[];
  applications: string[];
  gallery: SanityImage[];
  specs: {
    purity: string;
    moisture: string;
    shelfLife: string;
    packaging: string[];
    moq: string;
    containerLoad: string;
    origin: string;
    harvestSeason: string;
    storage: string;
  };
  seo?: SeoData;
}

export interface Benefit {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Agent {
  _id: string;
  companyName: string;
  country: string;
  location: string;
  phone: string;
  email: string;
}

export interface SiteSettings {
  companyName: string;
  logo?: SanityImage;
  phones: string[];
  email: string;
  address: string;
  businessHours: string;
  ceoName: string;
  socialLinks?: { platform: string; url: string }[];
}

export interface HomePageContent {
  hero: {
    badge: string;
    headline: string;
    paragraph: string;
    primaryCta: string;
    secondaryCta: string;
    image: SanityImage;
  };
  ancientSupergrain: {
    title: string;
    body: string;
  };
  seo?: SeoData;
}

export interface AboutPageContent {
  eyebrow: string;
  title: string;
  introduction: string;
  commitmentEyebrow: string;
  commitmentTitle: string;
  commitmentDescription: string;
  values: Array<{ _key?: string; title: string; body: string }>;
  seo?: SeoData;
}
