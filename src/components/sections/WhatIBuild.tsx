import { motion } from 'framer-motion';
import { HeartPulse, ListChecks, Bot, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';

const domains = [
  { icon: HeartPulse, title: 'AI Healthcare', description: 'Systems that watch out for people — fall detection, alerts, and care that actually reaches someone.', accent: '#22D3EE' },
  { icon: ListChecks, title: 'Productivity Software', description: 'Tools that remove friction for teams — role-based access, real-time boards, and clean REST APIs.', accent: '#3B82F6' },
  { icon: Bot, title: 'Intelligent Assistants', description: 'LLM-powered chat with memory and empathy — AI that holds a conversation, not just a query.', accent: '#A855F7' },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative section-pad py-28 md:py-36">
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="What I Build"
          title={
            <>
              Products that <span className="aurora-text">solve practical problems</span>.
            </>
          }
        />

        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-white/70">
            I enjoy building products that solve practical problems. Whether it is AI healthcare,
            productivity software, or intelligent assistants, I focus on creating scalable,
            user-friendly applications — and I care about the whole arc, from the model to the API
            to the interface a person actually touches.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal key={d.title} delay={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-2xl glass-strong p-7"
              >
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: d.accent }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${d.accent}1a`, color: d.accent }}
                >
                  <d.icon size={22} />
                </div>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-white">{d.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">{d.description}</p>
                <div
                  className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${d.accent}, transparent)` }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-10 flex items-center gap-2 text-sm text-white/40">
            <span>Every project below started as a real problem</span>
            <ArrowRight size={14} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
