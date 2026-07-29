import { motion } from 'framer-motion';

/**
 * Animated aurora gradient blobs that float in the background.
 */
export default function AuroraBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full blur-[120px] opacity-30"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent 60%)' }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full blur-[120px] opacity-25"
        style={{ background: 'radial-gradient(circle, #A855F7, transparent 60%)' }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/4 h-[38rem] w-[38rem] rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #22D3EE, transparent 60%)' }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] rounded-full blur-[120px] opacity-15"
        style={{ background: 'radial-gradient(circle, #86EFAC, transparent 60%)' }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
