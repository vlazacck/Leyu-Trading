import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Populate these via a .env file (see .env.example) once your Sanity project
// is created. The app falls back to local mock content (src/lib/mockData.ts)
// when no project id is configured, so the site runs out of the box.
//
// IMPORTANT: @sanity/client throws immediately if `projectId` is missing or
// empty — so we must not construct it at all until a real project id exists,
// otherwise the app crashes on load with "Configuration must contain
// `projectId`" before any mock-data fallback ever gets a chance to run.
export const isSanityConfigured = Boolean(import.meta.env.VITE_SANITY_PROJECT_ID);
console.log("Sanity configured?", isSanityConfigured);

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: false,
    })
  : null;

const imageBuilder = isSanityConfigured
  ? imageUrlBuilder({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET || "production",
    })
  : null;

export function urlForImage(
  source?: { asset?: { _ref: string } },
  dimensions?: { width: number; height: number },
): string {
  if (!source?.asset?._ref || !imageBuilder) return "";

  const builder = imageBuilder.image(source).auto("format");
  return (dimensions
    ? builder.width(dimensions.width).height(dimensions.height).fit("crop")
    : builder
  ).url();
}
