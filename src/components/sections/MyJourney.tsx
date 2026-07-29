import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { journey } from '@/data/content';

export default function MyJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="journey" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="My Journey"
          title={
            <>
              From first <span className="aurora-text">print()</span> to production AI.
            </>
          }
          description="An animated roadmap of how I got here — each step a deliberate move toward building real software."
        />

        <div ref={ref} className="relative mx-auto mt-12 max-w-2xl pl-8">
          {/* track */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[11px] top-2 bottom-2 w-px"
          >
            <div className="h-full w-full aurora-bg" />
          </motion.div>

          <div className="space-y-6">
            {journey.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex items-center gap-4"
              >
                <span
                  className="absolute left-0 flex h-6 w-6 -translate-x-[5px] items-center justify-center rounded-full"
                  style={{ background: step.accent }}
                >
                  <step.icon size={12} className="text-ink-950" />
                </span>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="group flex-1 rounded-xl glass px-5 py-3.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base font-medium text-white/90">{step.label}</span>
                    <span className="font-mono text-xs text-white/30">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </motion.div>
                {i < journey.length - 1 && (
                  <ChevronDown
                    size={14}
                    className="absolute left-[3px] -bottom-5 text-white/20"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
