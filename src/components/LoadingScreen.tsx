import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const total = 1600;
    const tick = (now: number) => {
      const t = Math.min((now - start) / total, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-950"
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 noise opacity-[0.04]" />
          <motion.div
            className="relative mb-10 h-20 w-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 rounded-2xl aurora-bg animate-aurora" />
            <div className="absolute inset-[3px] rounded-xl bg-ink-950 flex items-center justify-center">
              <span className="font-display text-2xl font-bold text-white">O</span>
            </div>
            <motion.div
              className="absolute -inset-2 rounded-2xl border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ojasvee Gupta
          </motion.p>

          <div className="mt-6 h-px w-56 overflow-hidden bg-white/10">
            <motion.div
              className="h-full aurora-bg"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 font-mono text-xs text-white/40">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
