import { motion } from "framer-motion";
import { Wheat, Leaf, Sparkles, Layers, Star, type LucideIcon } from "lucide-react";
import type { Benefit } from "../types";

const iconMap: Record<string, LucideIcon> = {
  wheat: Wheat,
  leaf: Leaf,
  sparkles: Sparkles,
  layers: Layers,
  star: Star,
};

export default function BenefitCard({ benefit, index = 0 }: { benefit: Benefit; index?: number }) {
  const Icon = iconMap[benefit.icon] ?? Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="flex flex-col gap-4 rounded-xl2 bg-cream p-7 ring-1 ring-forest/5"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <h3 className="font-display text-lg font-semibold text-ink">{benefit.title}</h3>
      <p className="text-sm leading-relaxed text-ink/60">{benefit.description}</p>
    </motion.div>
  );
}
