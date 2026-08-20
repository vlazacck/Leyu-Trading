import { defineField, defineType } from "sanity";

export default defineType({
  name: "agent",
  title: "Global Agent",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string" }),
    defineField({ name: "country", title: "Country", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
  ],
});
