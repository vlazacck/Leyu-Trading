import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../types";
import { urlForImage } from "../lib/sanity";

// How long each card stays highlighted before the next one takes over (ms).
const ROTATE_INTERVAL_MS = 3200;

export default function ProductShowcase({ products }: { products: Product[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (products.length < 2 || paused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % products.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [products.length, paused]);

  const half = Math.floor(products.length / 2);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex flex-nowrap items-center justify-center gap-3 overflow-hidden px-2 sm:gap-6 lg:gap-8"
    >
      {products.map((product, i) => {
        const isActive = i === activeIndex;

        // Work out where this card should sit (left / middle / right),
        // always keeping the active card centered.
        const relative = (i - activeIndex + products.length) % products.length;
        const signedOffset = relative > half ? relative - products.length : relative;
        const order = half + signedOffset;

        return (
          <motion.div
            key={product._id}
            layout
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            style={{ order }}
            animate={{
              scale: isActive ? 1.08 : 0.92,
              opacity: isActive ? 1 : 0.75,
              zIndex: isActive ? 10 : 1,
            }}
            onClick={() => setActiveIndex(i)}
            className="w-[78%] max-w-sm shrink-0 cursor-pointer sm:w-[58%] md:w-[42%] lg:w-full"
          >
            <div
              className={`group flex flex-col overflow-hidden rounded-xl2 bg-white ring-1 ring-black/5 transition-shadow duration-500 ${
                isActive ? "shadow-2xl ring-gold/40" : "shadow-sm"
              }`}
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
                  to={`/Products/${product.slug}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-gold"
                >
                  View details <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}