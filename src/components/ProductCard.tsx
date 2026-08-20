import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../types";
import { urlForImage } from "../lib/sanity";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-xl2 bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
    >
      <div
  className={`flex aspect-[4/3] items-center justify-center overflow-hidden ${
    product.variant === "white" ? "bg-cream" : "bg-sand/40"
  }`}
>
  {product.gallery?.[0] ? (
    <img
      src={urlForImage(product.gallery[0])}
      alt={product.name}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/70 text-forest ring-1 ring-forest/10">
      <span className="font-display text-sm font-semibold">
        {product.variant === "white" ? "White" : "Brown"}
      </span>
    </div>
  )}
</div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{product.name}</h3>
        <p className="text-sm leading-relaxed text-ink/60">{product.tagline}</p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {(product.highlights ?? []).slice(0, 2).map((h) => (
            <li
              key={h}
              className="rounded-full bg-forest/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-forest-light"
            >
              {h}
            </li>
          ))}
        </ul>
        <Link
          to={`/flours/${product.slug}`}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-gold"
        >
          View details <ArrowUpRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
