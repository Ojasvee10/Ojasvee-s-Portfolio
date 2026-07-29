import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { currentlyLearning } from '@/data/content';

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Currently Learning"
          title={
            <>
              What I'm <span className="aurora-text">leveling up</span> right now.
            </>
          }
          description="The field moves fast. Here's where I'm deliberately investing my time."
        />

        <div className="flex flex-wrap gap-4">
          {currentlyLearning.map((item, i) => (
            <Reveal key={item.name} delay={i % 3}>
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl glass-strong px-6 py-4"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 30% 0%, ${item.accent}22, transparent 70%)` }}
                />
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${item.accent}1a`, color: item.accent }}
                >
                  <item.icon size={18} />
                </motion.span>
                <span className="relative font-display text-base font-semibold text-white">{item.name}</span>
                <Sparkles size={14} className="relative text-white/30 transition-opacity group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
