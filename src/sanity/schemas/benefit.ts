import { defineField, defineType } from "sanity";

export default defineType({
  name: "benefit",
  title: "Health Benefit",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["wheat", "leaf", "sparkles", "layers", "star"],
      },
    }),
  ],
});
