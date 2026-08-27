export const homePageQuery = `*[_type == "homePage"][0]{
  hero,
  culinaryApplications,
  ancientSupergrain,
  featuredProductsSection,
  "featuredProducts": featuredProducts[]->{ _id, name, "slug": coalesce(slug.current, _id), type, variant, tagline, gallery },
  "benefits": benefits[]->{ _id, title, description, icon },
  "agents": agents[]->{ _id, companyName, country, location, phone, email },
  seo
}`;

export const aboutPageQuery = `*[_id == "aboutPage"][0]{
  eyebrow,
  title,
  introduction,
  commitmentEyebrow,
  commitmentTitle,
  commitmentDescription,
  values[]{ _key, title, body },
  seo
}`;

export const productsQuery = `*[_type == "product"] | order(variant asc, type asc){
  _id, name, "slug": coalesce(slug.current, _id), type, variant, tagline, description, highlights, gallery
}`;

export const productBySlugQuery = `*[_type == "product" && (lower(slug.current) == lower($slug) || _id == $slug)][0]{
  _id, name, "slug": coalesce(slug.current, _id), type, variant, tagline, description,
  highlights, applications, gallery, specs, seo
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  companyName, logo, phones, email, address, businessHours, ceoName, socialLinks
}`;
