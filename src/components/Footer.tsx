import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useSiteSettings } from "../lib/hooks";
import { urlForImage } from "../lib/sanity";

export default function Footer() {
  const { data: settings } = useSiteSettings();

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="flex flex-col gap-4">
           {settings?.logo && (
    <img src={urlForImage(settings.logo)} alt={settings.companyName || "Logo"} className="h-10 w-10 rounded-full object-contain" />
  )}
          <span className="font-display text-xl font-semibold">{settings?.companyName ?? "  Leyu Teff"}</span>
          <p className="max-w-xs text-sm leading-relaxed text-cream/65">
            Premium Ethiopian teff flour and grain, exported to food manufacturers, distributors, and
            wholesalers around the world.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">Navigate</span>
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Flours", to: "/flours" },
            { label: "Contact", to: "/contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-cream/75 hover:text-gold">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">Contact</span>
          <span className="flex items-start gap-2 text-sm text-cream/75">
            <MapPin size={16} className="mt-0.5 shrink-0 text-gold" /> {settings?.address}
          </span>
          {settings?.phones.map((phone) => (
            <span key={phone} className="flex items-center gap-2 text-sm text-cream/75">
              <Phone size={16} className="shrink-0 text-gold" /> {phone}
            </span>
          ))}
          <span className="flex items-center gap-2 text-sm text-cream/75">
            <Mail size={16} className="shrink-0 text-gold" /> {settings?.email}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">Hours</span>
          <span className="text-sm text-cream/75">{settings?.businessHours}</span>
          <span className="text-sm text-cream/75">CEO — {settings?.ceoName}</span>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-cream/50 lg:px-10">
        © {new Date().getFullYear()} {settings?.companyName ?? "  Leyu Teff"}. All rights reserved.
      </div>
    </footer>
  );
}
