import { ArrowDown } from 'lucide-react';
import { LineMaskSplit } from './LineMaskSplit';
import { CopyEmail } from './CopyEmail';

export const Hero = () => {
  return (
    <section className="relative min-h-[85dvh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 max-w-4xl mx-auto w-full">
      {/* Top Context Pill */}
      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mb-8 bg-zinc-100/80 dark:bg-zinc-900/50 transition-colors">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
        <span>Babcock University · 200L Software Engineering · Nigeria</span>
      </div>

      {/* Main Headline with Framer LineMaskSplit Animation */}
      <div className="space-y-6">
        <LineMaskSplit
          text="Thinking in numbers. Building in code."
          tag="h1"
          splitMode="words"
          staggerAmount={0.05}
          duration={0.7}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1]"
        />

        {/* Narrative bio */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-[58ch]">
          I'm Mubarak Lawal — a 200-level software engineering student at Babcock University in Nigeria. I naturally think in numbers before I write code, approaching software through data, logic, and measurable impact.
        </p>

        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[58ch]">
          Outside the classroom, I freelance across web development, app builds, social media management, and AI video workflows. Rather than waiting around to be hired into someone else's company, I lean toward building my own things. I'm still early in my journey, working hard alongside close friends to get better every day — using Claude, Gemini, and Qwen as my daily tools.
        </p>

        {/* Action Group: Email Copy + Scroll */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Framer Email-EA66zS Component */}
          <CopyEmail email="mubaraklawal.dev@gmail.com" />

          <a
            href="#works"
            className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-xs font-mono font-medium transition-colors"
          >
            <span>View Selected Works</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://github.com/posi946"
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
            title="GitHub profile: posi946"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Subtle Bottom Highlights Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 mt-12 border-t border-zinc-200 dark:border-zinc-800/80 text-xs">
        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
            Focus
          </span>
          <span className="font-medium text-zinc-800 dark:text-zinc-200 block">
            Software & Data
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
            Education
          </span>
          <span className="font-medium text-zinc-800 dark:text-zinc-200 block">
            200L Software Eng.
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
            AI Tools
          </span>
          <span className="font-medium text-zinc-800 dark:text-zinc-200 block">
            Claude · Gemini · Qwen
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
            Practice
          </span>
          <span className="font-medium text-zinc-800 dark:text-zinc-200 block">
            Freelance & Products
          </span>
        </div>
      </div>
    </section>
  );
};
