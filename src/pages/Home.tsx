import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import BenefitCard from "../components/BenefitCard";
import AgentCard from "../components/AgentCard";
import { useHomePage } from "../lib/hooks";
import { mockProducts, mockBenefits, mockAgents, mockHomePage } from "../lib/mockData";
import { urlForImage } from "../lib/sanity";
import ProductShowcase from "../components/ProductShowcase";
import type { Agent, Benefit, HomePageContent, Product } from "../types";

type HomePageViewData = HomePageContent & {
  featuredProducts?: Product[];
  benefits?: Benefit[];
  agents?: Agent[];
  culinaryApplications?: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ label: string; image?: { asset?: unknown } }>;
  };
};

export default function Home() {
  const { data, isLoading } = useHomePage();
  const homeData = data as HomePageViewData | undefined;

  if (isLoading || !homeData) {
    return <div className="flex min-h-[60vh] items-center justify-center text-ink/50">Loading…</div>;
  }

  const featuredProducts = homeData.featuredProducts?.length ? homeData.featuredProducts : mockProducts.slice(0, 3);
  const benefits = homeData.benefits?.length ? homeData.benefits : mockBenefits;
  const agents = homeData.agents?.length ? homeData.agents : mockAgents;
  const culinaryApplications = homeData.culinaryApplications ?? (mockHomePage as HomePageViewData).culinaryApplications ?? {
    eyebrow: "",
    title: "",
    description: "",
    items: [],
  };
  console.log("culinaryApplications data:", culinaryApplications);
  const culinaryItems = culinaryApplications.items ?? [];

  return (
    <div>
      <Hero hero={homeData.hero} />

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionTitle
          eyebrow="Flagship Exports"
          title="Our Signature Teff Products"
          description="Sergegna, Brown, and White Teff — grown in the Ethiopian highlands, milled with care, and ready for global markets."
        />
       <div className="mt-14">
  <ProductShowcase products={featuredProducts as any} />
</div>
      </section>

      {/* Ancient supergrain */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-light">
              6,000 Years of Heritage
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {homeData.ancientSupergrain.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/65">{homeData.ancientSupergrain.body}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              ["6,000+", "Years cultivated"],
              ["100%", "Naturally gluten-free"],
              ["High", "Iron & fiber content"],
              ["Complete", "Protein profile"],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-xl2 bg-cream p-6 text-center">
                <div className="font-display text-2xl font-semibold text-forest">{stat}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-ink/50">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Health benefits */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle
            eyebrow="Why Teff"
            title="Nourishment in Every Grain"
            description="Health-conscious consumers and food industry professionals trust teff for its exceptional nutritional profile."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <BenefitCard key={b._id} benefit={b as any} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              About leyu Teff
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              From Ethiopian Farms to the World's Kitchens
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-cream/75">
              Leyu Teff produces premium-quality teff flour directly from Ethiopian farms, using modern
              processing techniques that preserve the grain's natural nutritional value. We combine
              sustainable farming practices, rigorous quality control, and food-safety standards with a
              dedication to reliable export service — connecting traditional Ethiopian agriculture to
              modern international food production.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4"
          >
            {["Sustainable, farm-direct sourcing", "Rigorous quality control & food safety", "Modern milling, traditional integrity", "Reliable global export logistics"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl2 bg-white/5 px-5 py-4 ring-1 ring-white/10">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-cream/85">{item}</span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Culinary applications */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle
            eyebrow={culinaryApplications.eyebrow}
            title={culinaryApplications.title}
            description={culinaryApplications.description}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culinaryItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative mx-auto flex w-full max-w-[18rem] aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl2 bg-gradient-to-br from-sand/50 to-cream p-6 ring-1 ring-forest/5 sm:max-w-none"
              >
                {Boolean(item.image?.asset) ? (
                  <>
                    <img
                      src={urlForImage(item.image as any)}
                      alt={item.label}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </>
                ) : null}
                <span
                  className={`relative font-display text-lg font-semibold ${
                    item.image?.asset ? "text-white drop-shadow" : "text-ink"
                  }`}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global partners */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle
            eyebrow="Global Network"
            title="Trusted International Partners"
            description="Our global agents help distribute Leyu Teff products across international markets."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((a, i) => (
              <AgentCard key={a._id} agent={a as any} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
