import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        { name: "badge", title: "Badge Text", type: "string" },
        { name: "headline", title: "Headline", type: "string" },
        { name: "paragraph", title: "Supporting Paragraph", type: "text", rows: 3 },
        { name: "primaryCta", title: "Primary CTA Label", type: "string" },
        { name: "secondaryCta", title: "Secondary CTA Label", type: "string" },
        { name: "image", title: "Hero Image", type: "image" },
      ],
    }),
    defineField({
      name: "ancientSupergrain",
      title: "Ancient Supergrain Section",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 4 },
      ],
    }),
    defineField({
      name: "featuredProducts",
      title: "Featured Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "benefits",
      title: "Health Benefits",
      type: "array",
      of: [{ type: "reference", to: [{ type: "benefit" }] }],
    }),
    defineField({
      name: "agents",
      title: "Global Agents",
      type: "array",
      of: [{ type: "reference", to: [{ type: "agent" }] }],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});
