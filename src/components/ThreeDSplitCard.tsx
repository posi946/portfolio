import { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface ThreeDSplitCardProps {
  title: string;
  subtitle: string;
  category: string;
  metrics: string[];
  tags: string[];
  className?: string;
  onSelect?: () => void;
}

export const ThreeDSplitCard = ({
  title,
  subtitle,
  category,
  metrics,
  tags,
  className = '',
  onSelect,
}: ThreeDSplitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    sound.playClick(850);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleTouch = () => {
    sound.playClick(850);
    setIsHovered((prev) => !prev);
    if (onSelect) onSelect();
  };

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          sound.playPop();
          if (onSelect) onSelect();
        }}
        onTouchStart={handleTouch}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        className="relative w-full rounded-xl cursor-pointer p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900/70 shadow-sm dark:shadow-none backdrop-blur-sm transition-colors duration-200 group"
      >
        {/* Top Slice */}
        <div
          style={{
            transform: isHovered ? 'translateZ(20px) translateY(-3px)' : 'translateZ(0px) translateY(0px)',
            transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
            transformStyle: 'preserve-3d',
          }}
          className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200/80 dark:border-zinc-800"
        >
          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            {category}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
        </div>

        {/* Mid Content Slice */}
        <div
          style={{
            transform: isHovered ? 'translateZ(14px)' : 'translateZ(0px)',
            transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
            transformStyle: 'preserve-3d',
          }}
          className="py-4 space-y-1.5"
        >
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
            {subtitle}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-300">
            {metrics.slice(0, 2).map((m, i) => (
              <span key={i} className="inline-block px-2 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800/70">
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Tags */}
        <div
          style={{
            transform: isHovered ? 'translateZ(8px) translateY(2px)' : 'translateZ(0px) translateY(0px)',
            transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
            transformStyle: 'preserve-3d',
          }}
          className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800 flex flex-wrap gap-1.5"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
