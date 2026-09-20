import { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';
import { sound } from '../utils/audio';

interface CopyEmailProps {
  email?: string;
  className?: string;
}

export const CopyEmail = ({ email = "mubaraklawal.dev@gmail.com", className = "" }: CopyEmailProps) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = async () => {
    sound.playPop();
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback
    }

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`tactile-btn group inline-flex items-center gap-2 cursor-pointer select-none rounded-md px-3 py-1.5 transition-all text-xs font-mono font-medium border ${
        copied
          ? 'bg-zinc-200 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100 border-transparent'
          : 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
      } ${className}`}
      title="Copy email address"
      aria-label={`Copy email: ${email}`}
    >
      <span className="flex items-center justify-center w-3.5 h-3.5">
        {copied ? (
          <Check className="w-3.5 h-3.5" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200" />
        )}
      </span>

      <span className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 group-hover:decoration-zinc-900 dark:group-hover:decoration-zinc-200 transition-colors">
        {copied ? 'Copied to clipboard' : email}
      </span>
    </button>
  );
};
