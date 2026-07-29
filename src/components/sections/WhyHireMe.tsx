import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import Magnetic from '@/components/effects/Magnetic';
import { whyHireMe } from '@/data/content';

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative section-pad py-28 md:py-36">
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Clients / Recruiters"
          title={
            <>
              Why <span className="aurora-text">hire me</span>?
            </>
          }
          description="The short version for anyone deciding whether to reach out."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireMe.map((reason, i) => (
            <Reveal key={reason.title} delay={i % 4}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-2xl glass-strong p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: reason.accent }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${reason.accent}1a`, color: reason.accent }}
                >
                  <reason.icon size={20} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-white">{reason.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">{reason.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl glass-strong p-8 sm:flex-row">
            <div className="flex items-center gap-4">
              <Handshake size={28} className="text-cyan" />
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Let's build something together.</h3>
                <p className="text-sm text-white/55">Open to roles, freelance, and ambitious projects.</p>
              </div>
            </div>
            <Magnetic as="a" href="#contact" strength={0.25}>
              <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium text-white">
                <span className="absolute inset-0 -z-10 aurora-bg" />
                Start a conversation
              </span>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
