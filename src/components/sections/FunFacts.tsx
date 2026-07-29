import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import AnimatedCounter from '@/components/effects/AnimatedCounter';
import { funFacts } from '@/data/content';

export default function FunFacts() {
  return (
    <section id="fun-facts" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Fun Facts"
          title={
            <>
              The numbers <span className="aurora-text">add up</span>.
            </>
          }
          align="center"
          description="A few stats that tell the story better than a bullet list."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {funFacts.map((f, i) => (
            <Reveal key={f.label} delay={i % 5}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative h-full overflow-hidden rounded-2xl glass-strong p-6 text-center"
              >
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: f.accent }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${f.accent}1a`, color: f.accent }}
                >
                  <f.icon size={20} />
                </motion.div>
                <div className="relative mt-4 font-display text-3xl font-bold tracking-tighter text-white md:text-4xl">
                  <AnimatedCounter value={f.value} suffix={f.suffix} />
                </div>
                <div className="relative mt-1.5 text-sm text-white/50">{f.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
