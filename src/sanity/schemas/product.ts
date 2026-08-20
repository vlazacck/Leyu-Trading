import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["flour", "grain"] },
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: { list: ["white", "brown"] },
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "applications",
      title: "Culinary Applications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "specs",
      title: "Export Specifications",
      type: "object",
      fields: [
        { name: "purity", title: "Purity", type: "string" },
        { name: "moisture", title: "Moisture Content", type: "string" },
        { name: "shelfLife", title: "Shelf Life", type: "string" },
        { name: "packaging", title: "Packaging Options", type: "array", of: [{ type: "string" }] },
        { name: "moq", title: "Minimum Order Quantity", type: "string" },
        { name: "containerLoad", title: "Container Loading Capacity", type: "string" },
        { name: "origin", title: "Country of Origin", type: "string" },
        { name: "harvestSeason", title: "Harvest Season", type: "string" },
        { name: "storage", title: "Storage Recommendations", type: "string" },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});
