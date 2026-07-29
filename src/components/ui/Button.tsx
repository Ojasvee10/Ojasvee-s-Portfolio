import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Magnetic from '@/components/effects/Magnetic';

type Variant = 'primary' | 'ghost' | 'outline';

type Props = {
  children: ReactNode;
  href?: string;
  download?: string | boolean;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 overflow-hidden';

const variants: Record<Variant, string> = {
  primary:
    'text-white',
  ghost:
    'text-white/80 hover:text-white glass hover:bg-white/[0.06]',
  outline:
    'text-white/80 hover:text-white border border-white/15 hover:border-white/30',
};

export default function Button({ children, href, download, onClick, variant = 'primary', className = '', icon }: Props) {
  const inner = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 aurora-bg opacity-90 transition-opacity group-hover:opacity-100" />
      )}
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  return (
    <Magnetic as={href ? 'a' : 'button'} href={href} download={download} onClick={onClick} strength={0.25} className={`${base} ${variants[variant]} ${className}`}>
      <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2">
        {inner}
      </motion.span>
    </Magnetic>
  );
}
