import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { whyWorkWithMe } from '@/data/content';

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Work With Me"
          title={
            <>
              The traits that <span className="aurora-text">compound</span>.
            </>
          }
          description="Not a checklist — the patterns that show up across everything I build."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyWorkWithMe.map((card, i) => (
            <Reveal key={card.title} delay={i % 4}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: card.accent }}
                />
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${card.accent}1a`, boxShadow: `0 0 24px -8px ${card.accent}` }}
                >
                  <card.icon size={20} style={{ color: card.accent }} />
                </motion.div>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-white">{card.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">{card.description}</p>
                <div
                  className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
