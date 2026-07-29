import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

/**
 * Infinite marquee. Duplicates children for a seamless loop.
 */
export default function Marquee({ children, speed = 40, className = '' }: Props) {
  return (
    <div className={`group relative flex overflow-hidden mask-fade-x ${className}`}>
      <div
        className="flex shrink-0 items-center gap-12 pr-12 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-12 pr-12 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
