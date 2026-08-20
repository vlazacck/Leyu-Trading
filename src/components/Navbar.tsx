import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteSettings } from "../lib/hooks";
import { urlForImage } from "../lib/sanity";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/Products" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { data: settings, isLoading } = useSiteSettings();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-forest shadow-xl"
            : "bg-forest"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 transition-all duration-500 ${
            scrolled ? "h-20" : "h-24"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            {settings?.logo ? (
              <img
                src={urlForImage(settings.logo)}
                alt={settings.companyName || "Logo"}
                className={`rounded-full object-contain transition-all duration-500 ${
                  scrolled ? "h-16 w-16" : "h-24 w-24"
                }`}
              />
            ) : isLoading ? (
              <span
                className={`animate-pulse rounded-full bg-cream/10 transition-all duration-500 ${
                  scrolled ? "h-16 w-16" : "h-24 w-24"
                }`}
              />
            ) : (
              <span
                className={`flex items-center justify-center rounded-full border border-gold/60 text-cream transition-all duration-500 ${
                  scrolled ? "h-14 w-14" : "h-20 w-20"
                }`}
              >
                <span className="text-center">
                  <span
                    className={`block font-display transition-all ${
                      scrolled ? "text-lg" : "text-2xl"
                    }`}
                  >
                    ጤፍ
                  </span>
                  <span
                    className={`block font-display font-semibold transition-all ${
                      scrolled ? "text-[11px]" : "text-sm"
                    }`}
                  >
                    Leyu
                  </span>
                </span>
              </span>
            )}

            <span
              className={`hidden font-display font-semibold text-cream sm:block transition-all duration-500 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              {isLoading ? "" : settings?.companyName || "Leyu"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive
                      ? "text-gold"
                      : "text-cream/90 hover:text-gold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/Products"
              className={`hidden rounded-full bg-gold font-semibold uppercase tracking-wide text-forest shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gold-light sm:inline-flex items-center justify-center ${
                scrolled
                  ? "px-6 py-3 text-sm"
                  : "px-7 py-3.5 text-sm"
              }`}
            >
              Shop Teff Flour
            </Link>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-cream lg:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm lg:hidden"
              />

              {/* Sidebar */}
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35 }}
                className="fixed top-0 right-0 z-[60] flex h-full w-80 flex-col bg-forest shadow-2xl lg:hidden"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-6 top-6 text-cream"
                >
                  <X size={26} />
                </button>

                <div className="flex flex-col items-center gap-5 border-b border-white/10 px-6 pt-16 pb-8">
                  {settings?.logo ? (
                    <img
                      src={urlForImage(settings.logo)}
                      alt={settings.companyName || "Logo"}
                      className="h-24 w-24 rounded-full object-contain"
                    />
                  ) : isLoading ? (
                    <span className="h-24 w-24 animate-pulse rounded-full bg-cream/10" />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold text-cream">
                      <span className="text-center">
                        <span className="block font-display text-3xl">
                          ጤፍ
                        </span>
                        <span className="block text-sm">Leyu</span>
                      </span>
                    </div>
                  )}

                  <span className="font-display text-2xl font-semibold text-cream">
                    {isLoading ? "" : settings?.companyName || "Leyu Teff"}
                  </span>
                </div>

                <div className="flex flex-col px-7 py-7">
                  {links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `border-b border-white/10 py-5 text-base font-medium uppercase tracking-wide transition ${
                          isActive
                            ? "text-gold"
                            : "text-cream/90 hover:text-gold"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}

                  <Link
                    to="/Products"
                    onClick={() => setOpen(false)}
                    className="mt-8 rounded-full bg-gold px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-forest transition hover:bg-gold-light"
                  >
                    Shop Teff Flour
                  </Link>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}