import type { ReactNode } from "react";
import { MapPin, Phone, Mail, Clock, UserRound } from "lucide-react";
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
import { useSiteSettings } from "../lib/hooks";

export default function Contact() {
  const { data: settings } = useSiteSettings();

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionTitle
        eyebrow="Get in Touch"
        title="Let's Talk About Your Order"
        description="Reach our export team for pricing, samples, and shipping details."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <div className="flex flex-col gap-5 rounded-xl2 bg-forest p-8 text-cream lg:col-span-2">
          <InfoRow icon={<MapPin size={18} />} label="Address" value={settings?.address ?? ""} />
          <InfoRow icon={<Clock size={18} />} label="Business Hours" value={settings?.businessHours ?? ""} />
          <InfoRow icon={<UserRound size={18} />} label="CEO" value={settings?.ceoName ?? ""} />
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-gold"><Phone size={18} /></span>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">Phone</span>
              {settings?.phones.map((p) => (
                <span key={p} className="text-sm text-cream/85">{p}</span>
              ))}
            </div>
          </div>
          <InfoRow icon={<Mail size={18} />} label="Email" value={settings?.email ?? ""} />
        </div>

        <div className="rounded-xl2 bg-white p-8 ring-1 ring-black/5 lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gold">{icon}</span>
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">{label}</span>
        <span className="text-sm text-cream/85">{value}</span>
      </div>
    </div>
  );
}
