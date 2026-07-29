import { useEffect, useState } from 'react';

/**
 * A glowing dot that follows the cursor with a soft trailing ring.
 * Disabled on touch devices.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    setEnabled(true);

    let raf = 0;
    let tx = 0, ty = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setPos({ x: tx, y: ty });
    };

    const loop = () => {
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      setRing({ x: rx, y: ry });
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-white mix-blend-screen"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 12px 2px rgba(255,255,255,0.8)',
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] h-9 w-9 rounded-full border border-white/30 mix-blend-screen"
        style={{
          left: ring.x,
          top: ring.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 24px 4px rgba(168,85,247,0.25)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
}
