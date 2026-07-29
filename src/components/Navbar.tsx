import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from '@/components/effects/Magnetic';

const links = [
  { label: 'About', href: '#who-i-am' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Goals', href: '#future-goals' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]' : 'bg-transparent'
          }`}
        >
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-lg aurora-bg opacity-80" />
              <span className="absolute inset-[2px] rounded-md bg-ink-950 flex items-center justify-center">
                <span className="font-display text-sm font-bold text-white">O</span>
              </span>
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-white/90">
              Ojasvee<span className="text-white/40">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-3.5 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 scale-0 rounded-full bg-white/[0.06] transition-transform duration-300 hover:scale-100" />
              </a>
            ))}
          </div>

          <Magnetic href="#contact" as="a" strength={0.3} className="hidden md:block">
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]">
              Let's talk
            </span>
          </Magnetic>

          <button
            className="rounded-full p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-4 bg-ink-950/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
