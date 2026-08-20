import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useAboutPage } from "../lib/hooks";

export default function About() {
  const { data: aboutPage, isLoading } = useAboutPage();

  if (isLoading || !aboutPage) {
    return <div className="flex min-h-[60vh] items-center justify-center text-ink/50">Loading…</div>;
  }

  return (
    <div>
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{aboutPage.eyebrow}</span>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {aboutPage.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/75">
            {aboutPage.introduction}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionTitle
          eyebrow={aboutPage.commitmentEyebrow}
          title={aboutPage.commitmentTitle}
          description={aboutPage.commitmentDescription}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {aboutPage.values.map((v, i) => (
            <motion.div
              key={v._key ?? v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-xl2 bg-cream p-7 ring-1 ring-forest/5"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
