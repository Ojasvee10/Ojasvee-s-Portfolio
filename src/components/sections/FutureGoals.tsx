import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { futureGoals } from '@/data/content';

export default function FutureGoals() {
  return (
    <section id="future-goals" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Future Goals"
          title={
            <>
              Where I want to <span className="aurora-text">grow next</span>.
            </>
          }
          description="The direction I'm pointing — not a fixed plan, but a clear vector."
        />

        <div className="space-y-4">
          {futureGoals.map((goal, i) => (
            <Reveal key={goal.title} delay={i % 3}>
              <motion.div
                whileHover={{ x: 8 }}
                className="group relative flex items-center gap-5 overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="absolute -left-10 top-0 h-full w-32 opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: goal.accent }}
                />
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${goal.accent}1a`, color: goal.accent, boxShadow: `0 0 24px -8px ${goal.accent}` }}
                >
                  <goal.icon size={20} />
                </motion.span>
                <div className="relative flex-1">
                  <h3 className="font-display text-lg font-semibold text-white">{goal.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{goal.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="relative text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white/70"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
