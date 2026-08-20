import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { HomePageContent } from "../types";
import { urlForImage } from "../lib/sanity";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" },
  }),
};

// Custom variant for the "fill-up" text reveal animation
const textReveal = {
  hidden: { 
    opacity: 0, 
    y: 30,
    backgroundPositionY: "0%", // Start: shows the top 50% of the background (which is transparent)
  },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    backgroundPositionY: "100%", // End: slides up to show the bottom 50% (which is solid gold)
    transition: { 
      duration: 1.4, // Slower, more deliberate and visible animation
      delay: 0.15 * i, 
      ease: [0.22, 1, 0.36, 1], // Smooth "expo out" easing (no abrupt snapping)
    },
  }),
};

export default function Hero({ hero }: { hero: HomePageContent["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-[#063B2E]">
      <div className="relative grid min-h-[560px] grid-cols-1 lg:min-h-[620px] lg:grid-cols-2">
        {/* Left panel — copy */}
        <div className="relative z-10 flex flex-col justify-center gap-6 bg-[#063B2E] px-6 py-16 sm:px-12 lg:px-16 lg:py-0">
          <motion.span
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex w-fit items-center rounded-full border border-[#C98A3A]/50 bg-[#0B5D43]/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C98A3A]"
          >
            {hero.badge}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={textReveal}
            className="max-w-xl text-balance font-display text-4xl font-semibold uppercase leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]"
            style={{
              // Top 50% transparent, Bottom 50% Gold. 
              // As backgroundPositionY animates from 0% to 100%, the gold rises to cover the text.
              backgroundImage: "linear-gradient(to bottom, transparent 50%, #C98A3A 50%)",
              backgroundSize: "100% 200%",
              backgroundPositionY: "0%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "#C98A3A", // Fallback color ensures visibility if background-clip fails
              willChange: "background-position-y, opacity, transform", // Forces GPU acceleration for smoothness
            }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="max-w-md text-[15px] leading-relaxed text-[#FDFBF7]/80" // Cream color for readability
          >
            {hero.paragraph}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap gap-4 pt-2"
          >
           <Link
  to="/flours"
  className="rounded-full bg-[#C98A3A] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-[#063B2E] shadow-md transition-transform hover:scale-[1.03] hover:bg-[#E0A75E]"
>
  {hero.primaryCta}
</Link>

<Link
  to="/contact"
  className="rounded-full border border-[#FDFBF7]/30 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-[#FDFBF7] transition-colors hover:border-[#C98A3A] hover:text-[#C98A3A]"
>
  {hero.secondaryCta}
</Link>
</motion.div>
</div>

{/* Right panel — image, diagonal gold backdrop */}
<div className="relative flex h-[420px] items-start justify-center overflow-hidden bg-[#C98A3A] pt-0 lg:h-auto">
  <div
    className="absolute inset-0 z-10 bg-[#063B2E]"
    style={{ clipPath: "polygon(0 0, 12% 0, 0 100%, 0 100%)" }}
  />

  <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.15] [background-image:repeating-linear-gradient(115deg,transparent,transparent_2px,rgba(0,0,0,0.4)_2px,rgba(0,0,0,0.4)_3px)]" />

  <motion.img
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    src={hero.image?.asset ? urlForImage(hero.image) : "/teff2.webp"}
    alt={hero.image?.alt || "Teff flour and grain"}
    className="relative z-0 h-[360px] w-[420px] object-contain drop-shadow-2xl sm:h-[430px] sm:w-[520px] lg:h-[520px] lg:w-[620px]"
  />

</div>
      </div>
    </section>
  );
}