import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Agent } from "../types";

export default function AgentCard({ agent, index = 0 }: { agent: Agent; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex h-full flex-col gap-5 rounded-xl2 bg-forest p-6 text-cream shadow-[0_12px_30px_rgba(4,59,48,0.12)] ring-1 ring-white/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(4,59,48,0.2)]"
    >
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">{agent.country}</span>
        <h3 className="mt-1 font-display text-lg font-semibold">{agent.companyName}</h3>
      </div>
      <div className="flex flex-col text-sm text-cream/75">
        <span className="flex items-center gap-2">
          <MapPin size={15} className="shrink-0 text-gold" /> {agent.location}
        </span>
      </div>
    </motion.div>
  );
}
