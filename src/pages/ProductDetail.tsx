import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProduct } from "../lib/hooks";
import { urlForImage } from "../lib/sanity";

export default function ProductDetail() {
  const { slug } = useParams();
  const { data: product, isLoading } = useProduct(slug);

  if (isLoading) {
    return (
      <div className="py-32 text-center text-ink/50">
        Loading…
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">
          Product not found
        </h1>

        <Link
          to="/flours"
          className="mt-4 inline-block text-forest-light underline"
        >
          Back to all flours
        </Link>
      </div>
    );
  }

  const specRows = [
    ["Purity", product.specs.purity],
    ["Moisture Content", product.specs.moisture],
    ["Shelf Life", product.specs.shelfLife],
    ["Packaging", product.specs.packaging.join(", ")],
    ["Minimum Order Quantity", product.specs.moq],
    ["Container Load", product.specs.containerLoad],
    ["Country of Origin", product.specs.origin],
    ["Harvest Season", product.specs.harvestSeason],
    ["Storage", product.specs.storage],
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-light">
          {product.type === "flour" ? "Teff Flour" : "Teff Grain"} ·{" "}
          {product.variant === "white" ? "White" : "Brown"}
        </span>

        <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
          {product.name}
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/65">
          {product.description}
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="mt-12 grid gap-10 lg:grid-cols-3">

        {/* Left Side */}
        <div className="lg:col-span-2">

          {/* Image + Content */}
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">

            {/* Product Image */}
            <div>
              {product.gallery?.length > 0 && (
                <img
                  src={urlForImage(product.gallery[0])}
                  alt={product.name}
                  className="aspect-square w-full rounded-xl2 object-cover ring-1 ring-forest/5"
                />
              )}
            </div>

            {/* Applications + Highlights */}
            <div className="flex flex-col justify-start">

              <h2 className="font-display text-lg font-semibold text-ink">
                Culinary Applications
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full bg-forest/5 px-4 py-2 text-sm font-medium text-forest-light"
                  >
                    {application}
                  </span>
                ))}
              </div>

              <h2 className="mt-10 font-display text-lg font-semibold text-ink">
                Product Highlights
              </h2>

              <ul className="mt-4 space-y-3">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-ink/70"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Gallery Thumbnails */}
          {product.gallery?.length > 1 && (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {product.gallery.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={urlForImage(img)}
                  alt={`${product.name} ${index + 2}`}
                  className="aspect-square w-full rounded-xl2 object-cover ring-1 ring-forest/5"
                />
              ))}
            </div>
          )}

        </div>

        {/* Right Side - Specifications */}
        <div className="rounded-xl2 bg-cream p-7 ring-1 ring-forest/5">

          <h2 className="font-display text-lg font-semibold text-ink">
            Export Specifications
          </h2>

          <dl className="mt-5 flex flex-col gap-3">
            {specRows.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 border-b border-ink/5 pb-3 text-sm last:border-0"
              >
                <dt className="text-ink/50">{label}</dt>

                <dd className="text-right font-medium text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            to="/contact"
            className="mt-6 block rounded-full bg-forest px-6 py-3 text-center text-[13px] font-semibold uppercase tracking-wide text-cream transition-all duration-300 hover:scale-[1.02]"
          >
            Request a Quote
          </Link>

        </div>
      </div>
    </div>
  );
}