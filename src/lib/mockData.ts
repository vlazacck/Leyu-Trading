import type { AboutPageContent, Agent, Benefit, HomePageContent, Product, SiteSettings } from "../types";

export const mockSiteSettings: SiteSettings = {
  companyName: "Maed Export Trading ",
  phones: ["+251 911 532 949", "+251 911 264 129", "+251 962 606 060"],
  email: "contact@Maed Export Trading .com",
  address: "Debre Markos Industrial Zone, Debre Markos, Ethiopia",
  businessHours: "Monday – Friday, 8:00 AM – 5:00 PM",
  ceoName: "Semahegn Getachew",
};

export const mockHomePage: HomePageContent = {
  hero: {
    badge: "Farm to Table",
    headline: "The Crafted Essence of Ethiopia — Premium Stone-Ground Teff Flour",
    paragraph:
      "Experience the authentic foundation of Ethiopian cuisine. Our finest, stone-ground teff flour delivers a nutty, complex flavor and perfect texture for injera, baking, and beyond. Sourced from the Ethiopian highlands for purity and nutrition.",
    primaryCta: "View Flour Options",
    secondaryCta: "Contact Us",
    image: { asset: { _ref: "" }, alt: "Bowl of premium stone-ground teff flour with wooden scoop" },
  },
  ancientSupergrain: {
    title: "Ethiopia's Ancient Teff Flour",
    body: "Cultivated in Ethiopia for more than 6,000 years, teff has become globally recognized as a nutrient-rich superfood. Naturally gluten-free, complete in protein, rich in iron and fiber, and prized for its slow-release energy, teff flour is Ethiopia's gift to the world's kitchens.",
  },
  featuredProductsSection: {
    eyebrow: "Flagship Exports",
    title: "Our Signature Teff Products",
    description: "Sergegna, Brown, and White Teff — grown in the Ethiopian highlands, milled with care, and ready for global markets.",
  },
};

export const mockAboutPage: AboutPageContent = {
  eyebrow: "Our Story",
  title: "Connecting Ethiopian Heritage to the World",
  introduction: " Maed Export Trading  produces premium-quality teff flour directly from Ethiopian farms, using modern processing techniques that preserve its natural nutritional value. Based in Debre Markos, we bring together generations of agricultural tradition and modern export standards.",
  commitmentEyebrow: "What Guides Us",
  commitmentTitle: "Our Commitment to Every Shipment",
  commitmentDescription: "From the highland farms of Debre Markos to ports around the world, quality and reliability guide every decision we make.",
  values: [
    { title: "Sustainable Farming", body: "Working directly with Ethiopian highland farmers using practices that protect soil health for future harvests." },
    { title: "Rigorous Quality Control", body: "Every batch is graded, tested, and cleaned to meet international food-safety standards before export." },
    { title: "Reliable Logistics", body: "Full container loads, documentation, and shipping coordination handled end-to-end for global buyers." },
  ],
};

export const mockProducts: Product[] = [
  {
    _id: "white-teff-flour",
    name: "White Teff Flour",
    slug: "white-teff-flour",
    type: "flour",
    variant: "white",
    tagline: "Delicate, mild, and endlessly versatile",
    description:
      "Our White Teff Flour (ነጭ ጤፍ) is stone-ground from the palest, most prized teff, delivering a mild, slightly nutty flavor prized by bakers and injera makers alike.",
    highlights: ["Naturally gluten-free", "Mild, versatile flavor", "Stone-ground for texture"],
    applications: ["Injera", "Artisan bread", "Pastries", "Gluten-free baking"],
    gallery: [],
    specs: {
      purity: "99.5%",
      moisture: "≤ 12%",
      shelfLife: "12 months",
      packaging: ["25kg PP bags", "50kg PP bags", "Custom retail packaging"],
      moq: "1 container (20ft)",
      containerLoad: "18–20 MT / 20ft container",
      origin: "Debre Markos, Ethiopia",
      harvestSeason: "October – December",
      storage: "Cool, dry place away from direct sunlight",
    },
  },
  {
    _id: "brown-teff-flour",
    name: "Brown Teff Flour",
    slug: "brown-teff-flour",
    type: "flour",
    variant: "brown",
    tagline: "Rich, earthy, and traditionally authentic",
    description:
      "Brown Teff Flour (ቀይ ጤፍ) carries the deep, earthy flavor that defines traditional Ethiopian injera, with a heartier nutritional profile prized by health-conscious buyers.",
    highlights: ["Higher iron content", "Robust, earthy flavor", "Traditional injera standard"],
    applications: ["Traditional injera", "Porridge", "Breakfast cereal", "Modern gluten-free cuisine"],
    gallery: [],
    specs: {
      purity: "99%",
      moisture: "≤ 12%",
      shelfLife: "12 months",
      packaging: ["25kg PP bags", "50kg PP bags"],
      moq: "1 container (20ft)",
      containerLoad: "18–20 MT / 20ft container",
      origin: "Debre Markos, Ethiopia",
      harvestSeason: "October – December",
      storage: "Cool, dry place away from direct sunlight",
    },
  },
];

export const mockBenefits: Benefit[] = [
  { _id: "b1", title: "Protein & Fiber Powerhouse", description: "A complete protein source rich in dietary fiber, supporting sustained energy and healthy digestion.", icon: "wheat" },
  { _id: "b2", title: "Naturally Gluten-Free", description: "Safe and delicious for gluten-sensitive diets without compromising on flavor or texture.", icon: "leaf" },
  { _id: "b3", title: "Vitamins & Minerals", description: "An excellent source of iron, calcium, and B-vitamins essential to a balanced diet.", icon: "sparkles" },
  { _id: "b4", title: "Baking Versatility", description: "Performs beautifully in injera, breads, pastries, and modern gluten-free recipes alike.", icon: "layers" },
  { _id: "b5", title: "Rich Taste & Texture", description: "A distinctive, nutty flavor and fine texture that elevates every recipe it touches.", icon: "star" },
];

export const mockAgents: Agent[] = [
  { _id: "a1", companyName: "Blue Nile Trading", country: "Sweden", location: "Stockholm, Sweden", phone: "+46 8 123 4567", email: "info@bluenile-trading.se" },
];
