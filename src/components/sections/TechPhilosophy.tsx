import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { techPhilosophy } from '@/data/content';

export default function TechPhilosophy() {
  return (
    <section id="philosophy" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Tech Philosophy"
              title={
                <>
                  What good software <span className="aurora-text">means to me</span>.
                </>
              }
            />
            <Reveal delay={1}>
              <div className="relative rounded-2xl glass-strong p-6">
                <Quote size={24} className="text-purple/60" />
                <p className="mt-3 text-lg leading-relaxed text-white/70">
                  I believe good software is the kind you forget you're using. It's fast when you need it,
                  quiet when you don't, and boring in the best way — because the interesting work happened
                  before you ever touched it.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {techPhilosophy.map((p, i) => (
                <Reveal key={p.title} delay={i % 2}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative h-full overflow-hidden rounded-2xl glass p-6"
                  >
                    <div
                      className="absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{ background: p.accent }}
                    />
                    <div className="relative flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: `${p.accent}1a`, color: p.accent }}
                      >
                        <p.icon size={18} />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/60">{p.description}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
