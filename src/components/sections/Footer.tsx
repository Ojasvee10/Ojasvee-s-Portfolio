import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import SectionDivider from '@/components/ui/SectionDivider';
import Magnetic from '@/components/effects/Magnetic';

const socials = [
  { icon: Github, href: 'https://github.com/Ojasvee10', target: '_blank' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ojasvee-gupta/', target: '_blank' },
  { icon: Mail, href: 'mailto:ojasveegupta10@gmail.com', target: undefined },
];

export default function Footer() {
  return (
    <footer className="relative section-pad pt-10 pb-12">
      <SectionDivider />
      <div className="container-x mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-lg aurora-bg"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="absolute inset-[2px] rounded-md bg-ink-950 flex items-center justify-center">
              <span className="font-display text-sm font-bold text-white">O</span>
            </span>
          </span>
          <span className="font-display text-sm font-semibold text-white/80">
            Ojasvee<span className="text-white/40">.dev</span>
          </span>
        </a>

        <p className="text-center text-sm text-white/40">
          Designed & built by <span className="text-white/70">Ojasvee Gupta</span>
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s, i) => (
            <Magnetic key={i} as="a" href={s.href} target={s.target} rel={s.target ? 'noreferrer' : undefined} strength={0.3}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full glass text-white/60 transition-colors hover:text-white">
                <s.icon size={16} />
              </span>
            </Magnetic>
          ))}
          <Magnetic as="a" href="#hero" strength={0.3}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full glass text-white/60 transition-colors hover:text-white">
              <ArrowUp size={16} />
            </span>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
