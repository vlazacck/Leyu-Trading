import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Agent } from "../types";

export default function AgentCard({ agent, index = 0 }: { agent: Agent; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex flex-col gap-4 rounded-xl2 bg-forest p-7 text-cream ring-1 ring-white/5"
    >
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">{agent.country}</span>
        <h3 className="mt-1 font-display text-lg font-semibold">{agent.companyName}</h3>
      </div>
      <div className="flex flex-col gap-2 text-sm text-cream/75">
        <span className="flex items-center gap-2">
          <MapPin size={15} className="text-gold" /> {agent.location}
        </span>
        <span className="flex items-center gap-2">
          <Phone size={15} className="text-gold" /> {agent.phone}
        </span>
        <span className="flex items-center gap-2">
          <Mail size={15} className="text-gold" /> {agent.email}
        </span>
      </div>
    </motion.div>
  );
}
