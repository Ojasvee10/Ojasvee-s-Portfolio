import { motion } from 'framer-motion';

/**
 * A glowing animated divider that sweeps a gradient across the viewport.
 */
export default function SectionDivider() {
  return (
    <div className="relative mx-auto h-px w-full max-w-7xl overflow-hidden bg-white/[0.06]">
      <motion.div
        className="absolute inset-y-0 w-1/3"
        style={{
          background: 'linear-gradient(90deg, transparent, #3B82F6, #A855F7, #22D3EE, transparent)',
        }}
        initial={{ x: '-50%' }}
        animate={{ x: '250%' }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
