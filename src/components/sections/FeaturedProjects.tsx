import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, X, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/effects/TiltCard';
import { projects, type Project } from '@/data/content';

const cardAnimations = [
  { initial: { opacity: 0, y: 60, rotate: -2 }, animate: { opacity: 1, y: 0, rotate: 0 } },
  { initial: { opacity: 0, x: 60, scale: 0.95 }, animate: { opacity: 1, x: 0, scale: 1 } },
  { initial: { opacity: 0, y: 60, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, x: -60, rotate: 2 }, animate: { opacity: 1, x: 0, rotate: 0 } },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.92, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl glass-strong shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="relative h-44 overflow-hidden sm:h-56">
          <img src={project.mockup} alt={project.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/60 text-white/80 backdrop-blur hover:text-white"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-5">
            <h3 className="font-display text-2xl font-bold text-white">{project.name}</h3>
            <p className="text-sm text-white/60">{project.tagline}</p>
          </div>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-6">
          <p className="text-sm leading-relaxed text-white/70">{project.description}</p>

          <div className="mt-5">
            <div className="mb-2.5 flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/40">
              <Sparkles size={12} /> Key Achievements
            </div>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-white/70">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: project.accent }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            ) : (
              <span
  className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2.5 text-sm font-medium text-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.25)] backdrop-blur-lg"
>
  🚧 In Development
</span>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-white"
            >
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Work that <span className="aurora-text">speaks for itself</span>.
            </>
          }
          description="Four projects where AI met real constraints — accuracy, latency, and users who depend on it."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const anim = cardAnimations[i % cardAnimations.length];
            return (
              <motion.div
                key={p.id}
                initial={anim.initial}
                whileInView={anim.animate}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard
                  max={6}
                  glareColor={`${p.accent}40`}
                  className="h-full rounded-3xl"
                >
                  <div className="group relative h-full overflow-hidden rounded-3xl glass-strong">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${p.accent}55, transparent 40%, ${p.accent}33)`,
                        maskImage: 'linear-gradient(black, black)',
                      }}
                    />
                    <div className="gradient-border absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={p.mockup}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-950/30 to-transparent" />
                      <div
                        className="absolute -bottom-px left-0 right-0 h-px"
                        style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
                      />
                      <div className="absolute left-5 top-5 flex gap-2">
                        {p.metrics.map((m) => (
                          <span
                            key={m.label}
                            className="rounded-full bg-ink-950/60 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
                          >
                            {m.value} <span className="text-white/40">{m.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                          <p className="mt-0.5 text-sm text-white/50">{p.tagline}</p>
                        </div>
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors"
                          style={{ background: `${p.accent}22` }}
                        >
                          <ArrowUpRight size={16} />
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-white/60">{p.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-3">
                        <button
                          onClick={() => setActive(p)}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
                        >
                          Details
                        </button>
                        {p.liveUrl ? (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                          >
                            <ExternalLink size={14} /> Live
                          </a>
                        ) : (
<span
  className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.25)] backdrop-blur-lg"
>
  🚧 In Development
</span>
                        )}
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                          <Github size={14} /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
