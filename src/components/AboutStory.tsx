import { LineMaskSplit } from './LineMaskSplit';

export const AboutStory = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full border-t border-zinc-200 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="space-y-2 mb-10">
        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
          Background & Reality
        </span>
        <LineMaskSplit
          text="Still a Student. Working Hard to Build."
          tag="h2"
          splitMode="words"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Honest personal narrative */}
        <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          <p>
            I’m a 200-level software engineering student at <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Babcock University, Nigeria</strong>. I haven't reached some grand summit yet — I'm an undergraduate putting in the work every single day, mastering algorithms, and getting better along the way.
          </p>
          <p>
            I’ve always approached engineering with a numbers-first mindset: before writing code, I want to understand the variables, distributions, and measurable outcomes. I think in data and logic before I commit to implementation.
          </p>
          <p>
            Outside of university lectures, I freelance across web development, app builds, social media management, and AI video production. My bias is simple: <strong className="font-semibold text-zinc-900 dark:text-zinc-100">I would rather build my own things than wait around to be hired into someone else's company</strong>.
          </p>
          <p>
            I don’t do this alone. I have friends who help me, review my ideas, and keep me grounded. Combined with modern AI copilots — <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Claude, Gemini, and Qwen</strong> — I treat every project as a chance to ship software that works in the real world.
          </p>
        </div>

        {/* Right: Clean facts */}
        <div className="md:col-span-5 space-y-3">
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm dark:shadow-none transition-colors">
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
              Current Academic Standing
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 block">
              Babcock University, Nigeria
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-0.5">
              B.Sc. Software Engineering · 200 Level
            </span>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm dark:shadow-none transition-colors">
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
              Freelance & Hands-On Work
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 block">
              Client Builds & Personal Products
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-0.5">
              Web engineering, mobile apps, AI video & social media
            </span>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm dark:shadow-none transition-colors">
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
              Tools & Multipliers
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 block">
              Claude · Gemini · Qwen
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-0.5">
              TypeScript, React, Python, Supabase, and Node.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
