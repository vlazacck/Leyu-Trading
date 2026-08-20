import { useQuery } from "@tanstack/react-query";
import { isSanityConfigured, sanityClient } from "./sanity";
import { aboutPageQuery, homePageQuery, productBySlugQuery, productsQuery, siteSettingsQuery } from "./queries";
import { mockAboutPage, mockAgents, mockBenefits, mockHomePage, mockProducts, mockSiteSettings } from "./mockData";
import type { AboutPageContent, HomePageContent, Product, SiteSettings } from "../types";

function getCached<T>(key: string): T | undefined {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : undefined;
  } catch {
    return undefined;
  }
}

function setCached<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota / private-browsing errors
  }
}

export function useSiteSettings() {
  return useQuery<SiteSettings>({
    queryKey: ["siteSettings"],
    initialData: () => (isSanityConfigured ? undefined : getCached<SiteSettings>("cache:siteSettings")),
    queryFn: async () => {
      if (!isSanityConfigured) return mockSiteSettings;
      const data = await sanityClient!.fetch(siteSettingsQuery);
      const result = data ?? mockSiteSettings;
      if (!isSanityConfigured) setCached("cache:siteSettings", result);
      return result;
    },
  });
}

export function useHomePage() {
  return useQuery({
    queryKey: ["homePage"],
    initialData: () => (isSanityConfigured ? undefined : getCached<HomePageContent>("cache:homePage")),
    queryFn: async () => {
      if (!isSanityConfigured) {
        return {
          ...mockHomePage,
          featuredProducts: mockProducts.slice(0, 3),
          benefits: mockBenefits,
          agents: mockAgents,
        };
      }
      const data = await sanityClient!.fetch<HomePageContent>(homePageQuery);
      const result = data ?? {
        ...mockHomePage,
        featuredProducts: mockProducts.slice(0, 3),
        benefits: mockBenefits,
        agents: mockAgents,
      };
      if (!isSanityConfigured) setCached("cache:homePage", result);
      return result;
    },
  });
}

export function useAboutPage() {
  return useQuery<AboutPageContent>({
    queryKey: ["aboutPage"],
    initialData: () => (isSanityConfigured ? undefined : getCached<AboutPageContent>("cache:aboutPage")),
    queryFn: async () => {
      if (!isSanityConfigured) return mockAboutPage;
      const data = await sanityClient!.fetch<AboutPageContent>(aboutPageQuery);
      const result = data ?? mockAboutPage;
      if (!isSanityConfigured) setCached("cache:aboutPage", result);
      return result;
    },
  });
}

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    initialData: () => (isSanityConfigured ? undefined : getCached<Product[]>("cache:products")),
    queryFn: async () => {
      if (!isSanityConfigured) return mockProducts;
      const data = await sanityClient!.fetch(productsQuery);
      const result = data?.length ? data : mockProducts;
      if (!isSanityConfigured) setCached("cache:products", result);
      return result;
    },
  });
}

export function useProduct(slug: string | undefined) {
  return useQuery<Product | undefined>({
    queryKey: ["product", slug],
    enabled: Boolean(slug),
    queryFn: async () => {
      if (!isSanityConfigured) return mockProducts.find((p) => p.slug === slug);
      const data = await sanityClient!.fetch(productBySlugQuery, { slug });
      return data ?? mockProducts.find((p) => p.slug === slug);
    },
  });
}
