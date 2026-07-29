import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import { beyondCoding } from '@/data/content';

export default function BeyondCoding() {
  return (
    <section id="beyond-coding" className="relative section-pad py-28 md:py-36">
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Beyond Coding"
          title={
            <>
              The person <span className="aurora-text">behind the keyboard</span>.
            </>
          }
          description="Software is what I build, not all of who I am. Here's the rest."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {beyondCoding.map((item, i) => (
            <Reveal key={item.title} delay={i % 4}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: item.accent }}
                />
                <div
                  className="relative flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `${item.accent}1a`, color: item.accent }}
                >
                  <item.icon size={20} />
                </div>
                <h3 className="relative mt-4 font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-white/55">{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-8 flex items-center gap-3 rounded-2xl glass p-5">
            <Coffee size={18} className="text-neon" />
            <p className="text-sm text-white/60">
              When I'm not shipping, I'm probably reading, building a side project, or running an event for 500+ people.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
