import type { ReactNode } from 'react';
import Reveal from '@/components/effects/Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
