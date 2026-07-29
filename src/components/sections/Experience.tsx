import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { timeline } from '@/data/content';

const typeColor: Record<string, string> = {
  education: '#3B82F6',
  project: '#22D3EE',
  achievement: '#A855F7',
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              The path so <span className="aurora-text">far</span>.
            </>
          }
          description="Education, project milestones, and key achievements — animated as you scroll."
        />

        <div ref={ref} className="relative mt-10 pl-8 md:pl-0">
          {/* track */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[11px] top-2 bottom-2 w-px md:left-1/2 md:-translate-x-1/2"
          >
            <div className="h-full w-full aurora-bg" />
          </motion.div>

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              const color = typeColor[item.type];
              return (
                <div
                  key={i}
                  className={`relative flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* node */}
                  <span
                    className="absolute left-0 top-2 z-10 flex h-6 w-6 -translate-x-[5px] items-center justify-center rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{ background: color }}
                  >
                    <span className="absolute h-6 w-6 animate-ping rounded-full opacity-40" style={{ background: color }} />
                    <item.icon size={12} className="relative text-ink-950" />
                  </span>

                  <div className={`ml-10 w-full md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Reveal delay={0}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group relative overflow-hidden rounded-2xl glass p-6"
                      >
                        <div
                          className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-50"
                          style={{ background: color }}
                        />
                        <div className="relative">
                          <span
                            className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                            style={{ background: `${color}22`, color }}
                          >
                            {item.period}
                          </span>
                          <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                          <p className="text-sm text-white/50">{item.org}</p>
                          <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
                        </div>
                      </motion.div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
