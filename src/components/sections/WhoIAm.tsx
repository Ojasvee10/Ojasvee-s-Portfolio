import { motion } from 'framer-motion';
import { Code2, Brain, Server, Layers, Sparkles, ArrowDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';

const pillars = [
  { icon: Brain, label: 'AI', color: '#A855F7' },
  { icon: Server, label: 'Backend', color: '#3B82F6' },
  { icon: Layers, label: 'Full Stack', color: '#22D3EE' },
  { icon: Sparkles, label: 'Always Learning', color: '#86EFAC' },
];

export default function WhoIAm() {
  return (
    <section id="who-i-am" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who I Am"
              title={
                <>
                  I'm <span className="aurora-text">Ojasvee</span> — I build software that ships.
                </>
              }
            />

            <div className="space-y-5 text-lg leading-relaxed text-white/70">
              <Reveal>
                <p>
                  I fell in love with software engineering the moment I realized code could turn a vague
                  idea into something real — something a person could actually use. That feeling never
                  left. Every project I build starts with a simple question: <span className="text-white">does this solve a real problem for someone?</span>
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p>
                  I enjoy solving real-world problems because the constraints are honest. Accuracy,
                  latency, cost, and users don't care about hype — they care about what works. That's why
                  I gravitate toward AI: it's the most powerful tool we've ever had for turning messy,
                  human problems into working software, and it's still early enough to be fun.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  My passion lives at the intersection of three things — <span className="text-white">AI</span>,
                  <span className="text-white"> backend systems</span>, and <span className="text-white">full-stack development</span>.
                  I like being the person who can fine-tune a model, design the API behind it, and ship the
                  interface in front of it. I learn new technologies constantly, not because I have to,
                  but because the field moves fast and standing still is the same as going backwards.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p>
                  Continuous improvement isn't a buzzword for me — it's the whole point. 24+
                  certifications, 350+ DSA problems, and four major AI projects later, I'm still
                  uncomfortable with how much I don't know. That discomfort is the engine.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right: floating pillars */}
          <div className="lg:col-span-5">
            <Reveal delay={1}>
              <div className="grid grid-cols-2 gap-4">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl glass p-6"
                  >
                    <div
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-50"
                      style={{ background: p.color }}
                    />
                    <p.icon size={28} style={{ color: p.color }} />
                    <p className="mt-4 font-display text-lg font-semibold text-white">{p.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-4 flex items-center gap-3 rounded-2xl glass p-5"
              >
                <Code2 size={20} className="text-cyan" />
                <p className="text-sm text-white/60">
                  "If it doesn't ship, it doesn't count."
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
