import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'div' | 'button' | 'a';
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

/**
 * A magnetic element that subtly pulls toward the cursor on hover.
 */
export default function Magnetic({
  children,
  className = '',
  strength = 0.35,
  as = 'div',
  href,
  download,
  target,
  rel,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const motionProps = {
    animate: { x: offset.x, y: offset.y },
    transition: { type: 'spring' as const, stiffness: 200, damping: 15, mass: 0.3 },
  };

  if (as === 'a') {
    return (
      <motion.a
        ref={ref as never}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
  if (as === 'button') {
    return (
      <motion.button
        ref={ref as never}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
