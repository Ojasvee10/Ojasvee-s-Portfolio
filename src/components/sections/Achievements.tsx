import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { achievements, certifications } from '@/data/content';

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Wins worth <span className="aurora-text">noting</span>.
            </>
          }
          description="Recognition from solving problems — on platforms, in cohorts, and on stage."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i % 3}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: a.accent }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${a.accent}1a`, boxShadow: `0 0 24px -6px ${a.accent}` }}
                >
                  <a.icon size={20} style={{ color: a.accent }} />
                </div>
                <h3 className="relative mt-4 font-display text-lg font-semibold text-white">{a.title}</h3>
                <p className="relative mt-1 text-sm text-white/50">{a.subtitle}</p>
                <div
                  className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${a.accent}, transparent)` }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Certifications wall */}
        <div className="mt-20">
          <Reveal>
            <h3 className="mb-8 font-display text-2xl font-semibold text-white md:text-3xl">
              Certifications
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-44 overflow-hidden rounded-2xl glass-strong"
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${c.accent}33, transparent 70%)` }}
                  />
                  <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ background: `${c.accent}1a`, boxShadow: `0 0 30px -8px ${c.accent}` }}
                    >
                      <span className="font-display text-lg font-bold" style={{ color: c.accent }}>
                        {c.name.slice(0, 2)}
                      </span>
                    </motion.div>
                    <h4 className="mt-4 font-display text-base font-semibold text-white">{c.name}</h4>
                    <p className="text-xs text-white/40">{c.issuer}</p>

                    {/* hover detail */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 text-xs leading-relaxed text-white/70 transition-transform duration-500 group-hover:translate-y-0 glass-strong">
                      {c.detail}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
