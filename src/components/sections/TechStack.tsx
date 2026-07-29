import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { techStack } from '@/data/content';

export default function TechStack() {
  return (
    <section id="stack" className="relative section-pad py-28 md:py-36">
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              The tools I <span className="aurora-text">reach for</span>.
            </>
          }
          description="A focused stack for shipping AI products end-to-end — from model to API to interface."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci % 3}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: 'radial-gradient(circle, #A855F7, transparent 60%)' }}
                />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-white/80 ring-1 ring-white/10">
                    <cat.icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2.5">
                  {cat.items.map((item, ii) => (
                    <motion.span
                      key={item.name}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="group/badge relative inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                        style={{ background: item.color, boxShadow: `0 0 0px ${item.color}` }}
                      />
                      <span
                        className="transition-colors duration-300 group-hover/badge:text-white"
                        onMouseEnter={(e) => {
                          const dot = e.currentTarget.previousElementSibling as HTMLElement;
                          if (dot) dot.style.boxShadow = `0 0 12px ${item.color}`;
                        }}
                        onMouseLeave={(e) => {
                          const dot = e.currentTarget.previousElementSibling as HTMLElement;
                          if (dot) dot.style.boxShadow = `0 0 0px ${item.color}`;
                        }}
                      >
                        {item.name}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
