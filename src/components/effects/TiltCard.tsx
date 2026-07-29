import { useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  max?: number;
};

/**
 * A card that tilts in 3D toward the cursor with a moving glare highlight.
 */
export default function TiltCard({ children, className = '', glareColor = 'rgba(168,85,247,0.25)', max = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 150, damping: 18 });
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px);
    my.set(py);
    setGlare({ x: px * 100, y: py * 100, o: 1 });
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
    setGlare((g) => ({ ...g, o: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.o,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${glareColor}, transparent 50%)`,
        }}
      />
      <div style={{ transform: 'translateZ(40px)' }}>{children}</div>
    </motion.div>
  );
}
