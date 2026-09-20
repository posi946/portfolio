import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LineMaskSplitProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  splitMode?: 'lines' | 'words';
  staggerAmount?: number;
  duration?: number;
  delay?: number;
  maskLines?: boolean;
  color?: string;
}

export const LineMaskSplit = ({
  text,
  tag = 'h1',
  className = '',
  splitMode = 'words',
  staggerAmount = 0.04,
  duration = 0.7,
  delay = 0.1,
  maskLines = true,
}: LineMaskSplitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('.mask-inner-item');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          {
            yPercent: 110,
            opacity: 0,
            rotateZ: 1.5,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateZ: 0,
            duration,
            stagger: staggerAmount,
            delay,
            ease: 'power3.out',
            clearProps: 'transform',
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [inView, duration, staggerAmount, delay]);

  const words = text.split(' ');

  const Tag = tag;

  return (
    <div ref={containerRef} className={`line-mask-split ${className}`}>
      <Tag className="flex flex-wrap items-baseline gap-x-[0.28em] gap-y-1 overflow-hidden m-0 p-0 leading-[1.1]">
        {splitMode === 'words' ? (
          words.map((word, idx) => (
            <span
              key={idx}
              className={`inline-block align-top ${maskLines ? 'overflow-hidden' : ''}`}
            >
              <span className="mask-inner-item inline-block will-change-transform">
                {word}
              </span>
            </span>
          ))
        ) : (
          <span className={`inline-block ${maskLines ? 'overflow-hidden' : ''}`}>
            <span className="mask-inner-item inline-block will-change-transform">
              {text}
            </span>
          </span>
        )}
      </Tag>
    </div>
  );
};
