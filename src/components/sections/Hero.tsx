import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileDown, FolderGit2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import ParticleField from '@/components/effects/ParticleField';
import AuroraBlobs from '@/components/effects/AuroraBlobs';
import Magnetic from '@/components/effects/Magnetic';

const codeBody = [
  ['role:', '"Software Engineer"', 'text-electric'],
  ['stack:', '["FastAPI", "React", "LLMs"]', 'text-neon'],
  ['focus:', '"real-world AI"', 'text-purple'],
  ['shipped:', '4', 'text-cyan'],
  ['coffee:', '∞', 'text-white/50'],
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <AuroraBlobs />
      <ParticleField className="absolute inset-0 h-full w-full opacity-70" />
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 md:px-10 lg:flex-row lg:items-center lg:gap-12">
        {/* Left: copy */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Building AI that
            <br />
            actually solves
            <br />
            <span className="aurora-text">real problems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            Software Engineer &nbsp;·&nbsp; AI/ML Engineer &nbsp;·&nbsp; Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
              View Projects
            </Button>
            <Magnetic as="a" href="/Ojasvee_Gupta_resume.pdf" target="_blank" download="Ojasvee_Gupta_resume.pdf" strength={0.25}>
              <span className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/80 glass hover:bg-white/[0.06] transition-colors duration-300">
                <FileDown size={16} />
                <span className="relative z-10">Resume</span>
              </span>
            </Magnetic>
            <div className="flex items-center gap-2">
              <Magnetic as="a" href="https://github.com/Ojasvee10" target="_blank" rel="noreferrer" strength={0.3}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 transition-colors hover:text-white">
                  <Github size={18} />
                </span>
              </Magnetic>
              <Magnetic as="a" href="https://www.linkedin.com/in/ojasvee-gupta/" target="_blank" rel="noreferrer" strength={0.3}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 transition-colors hover:text-white">
                  <Linkedin size={18} />
                </span>
              </Magnetic>
              <Magnetic as="a" href="mailto:ojasveegupta10@gmail.com" strength={0.3}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 transition-colors hover:text-white">
                  <Mail size={18} />
                </span>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right: floating code window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 flex-1 lg:mt-0"
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto max-w-md"
          >
            {/* rotating gradient ring */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem] border border-white/5" />
            <div className="absolute -inset-3 -z-10 rounded-[1.7rem] aurora-bg opacity-20 blur-2xl animate-aurora" />
            <motion.div
              className="absolute -inset-2 -z-10 rounded-[1.7rem] border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(59,130,246,0.4), transparent, rgba(168,85,247,0.4), transparent)',
                maskImage: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
                WebkitMaskImage: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
              }}
            />

            <div className="overflow-hidden rounded-2xl glass-strong shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/40">engineer.ts</span>
                <span className="ml-auto font-mono text-[10px] text-white/30">typescript</span>
              </div>
              <div className="p-5 font-mono text-sm leading-7">
                <div>
                  <span className="text-purple">const </span>
                  <span className="text-cyan">ojasvee</span>
                  <span className="text-white/60"> = {'{'}</span>
                </div>
                {codeBody.map(([k, v, color], i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.25 }}
                    className="pl-5"
                  >
                    <span className="text-white/50">{k}</span>
                    <span className="text-white/40"> </span>
                    <span className={color}>{v}</span>
                    <span className="text-white/30">,</span>
                  </motion.div>
                ))}
                <div className="text-white/60">{'}'}</div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                  className="mt-3 flex items-center gap-2 text-xs text-white/40"
                >
                  <span className="h-4 w-1.5 animate-pulse bg-cyan" />
                  <span>building the future, one model at a time</span>
                </motion.div>
              </div>
            </div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-6 top-16 hidden rounded-xl glass px-3 py-2 text-xs font-medium text-white/80 sm:block"
            >
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-electric" />
              FastAPI
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-4 top-1/3 hidden rounded-xl glass px-3 py-2 text-xs font-medium text-white/80 sm:block"
            >
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-purple" />
              LLMs
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-4 left-1/4 hidden rounded-xl glass px-3 py-2 text-xs font-medium text-white/80 sm:block"
            >
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-neon" />
              92% accuracy
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#who-i-am"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about"
      >
        <FolderGit2 size={20} />
      </motion.a>
    </section>
  );
}
