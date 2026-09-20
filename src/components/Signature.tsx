import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SignatureProps {
  className?: string;
  autoPlay?: boolean;
  repeatDelay?: number;
}

export const Signature = ({
  className = '',
  repeatDelay = 2.4,
}: SignatureProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll<SVGPathElement>('.sig-path'));

    // Compute exact lengths for razor-sharp stroke dash offsets
    paths.forEach((p) => {
      const length = p.getTotalLength();
      p.style.strokeDasharray = `${length}`;
      p.style.strokeDashoffset = `${length}`;
    });

    const ctx = gsap.context(() => {
      // Endless repetitive loop: write -> admire -> fade -> repeat
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.3,
      });

      // Step 1: Draw each letter in sequence with cursive overlap
      paths.forEach((p, idx) => {
        const isFlourish = idx === paths.length - 1;
        tl.to(
          p,
          {
            strokeDashoffset: 0,
            duration: isFlourish ? 0.55 : 0.32,
            ease: isFlourish ? 'power2.out' : 'power1.inOut',
          },
          idx === 0 ? '+=0.2' : '-=0.08'
        );
      });

      // Step 2: Hold full signature so the viewer can read "mubarak" clearly
      tl.to({}, { duration: repeatDelay });

      // Step 3: Gentle fade out of the signature
      tl.to(svg, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.inOut',
        onComplete: () => {
          paths.forEach((p) => {
            const length = p.getTotalLength();
            p.style.strokeDashoffset = `${length}`;
          });
        },
      });

      // Step 4: Reset opacity for next repetition
      tl.to(svg, {
        opacity: 1,
        duration: 0.25,
        ease: 'power1.out',
      });

      timelineRef.current = tl;
    }, containerRef);

    return () => ctx.revert();
  }, [repeatDelay]);

  const handleRestart = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-col items-center gap-1.5 select-none ${className}`}
    >
      <div
        className="relative group cursor-pointer"
        onClick={handleRestart}
        title="Signature loops continuously · Click to restart now"
      >
        <svg
          ref={svgRef}
          viewBox="0 0 320 100"
          className="w-44 sm:w-52 h-auto overflow-visible stroke-zinc-900 dark:stroke-zinc-100 will-change-transform transition-opacity"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 'm' stroke */}
          <path
            d="M 25 65 C 20 40, 30 25, 42 45 C 50 65, 58 35, 68 45 C 75 55, 82 40, 88 58"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sig-path"
          />
          {/* 'u' stroke */}
          <path
            d="M 88 58 C 95 68, 105 68, 112 55 C 118 45, 122 55, 128 62"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sig-path"
          />
          {/* 'b' loop & stroke */}
          <path
            d="M 128 62 C 135 40, 140 15, 146 12 C 150 10, 154 25, 148 48 C 145 60, 155 64, 164 56"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sig-path"
          />
          {/* 'a' stroke */}
          <path
            d="M 175 48 C 165 44, 160 55, 168 64 C 176 68, 185 62, 186 50 L 186 65"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sig-path"
          />
          {/* 'r' stroke */}
          <path
            d="M 186 65 C 192 52, 198 44, 206 45 C 212 46, 214 50, 216 62"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sig-path"
          />
          {/* 'a' stroke */}
          <path
            d="M 226 48 C 218 45, 215 54, 222 64 C 228 68, 235 60, 236 49 L 236 65"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sig-path"
          />
          {/* 'k' flourish */}
          <path
            d="M 236 65 C 242 45, 248 18, 254 14 C 258 12, 260 25, 255 50 C 258 45, 268 44, 264 54 C 262 58, 272 66, 282 68"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sig-path"
          />
          {/* Underline flourish */}
          <path
            d="M 38 84 C 110 77, 195 80, 292 73"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="sig-path"
          />
        </svg>
      </div>

      <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
        Mubarak Lawal · Autograph
      </span>
    </div>
  );
};
