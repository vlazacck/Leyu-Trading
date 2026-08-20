export const homePageQuery = `*[_type == "homePage"][0]{
  hero,
  culinaryApplications,
  ancientSupergrain,
  "featuredProducts": featuredProducts[]->{ _id, name, "slug": slug.current, type, variant, tagline, gallery },
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
  _id, name, "slug": slug.current, type, variant, tagline, description, highlights, gallery
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0]{
  _id, name, "slug": slug.current, type, variant, tagline, description,
  highlights, applications, gallery, specs, seo
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  companyName, logo, phones, email, address, businessHours, ceoName, socialLinks
}`;
