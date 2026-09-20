import { LineMaskSplit } from './LineMaskSplit';

export const Philosophy = () => {
  const pillars = [
    {
      index: '01',
      title: 'Numbers Before Code',
      detail:
        'I evaluate software through inputs, distributions, and quantifiable impact. Before picking frameworks or writing lines of code, I make sure the data flow, user numbers, and underlying logic make sense.',
    },
    {
      index: '02',
      title: 'Building Over Waiting',
      detail:
        'Rather than waiting to be hired into someone else’s setup, I lean toward building my own things. Freelance client projects, web tools, mobile apps, and AI video workflows are where theory becomes tangible software.',
    },
    {
      index: '03',
      title: 'Amplified with AI',
      detail:
        'I collaborate with friends and orchestrate Claude, Gemini, and Qwen as daily peers. When directed with rigorous taste, AI turns a disciplined 200-level student into a squad capable of shipping end-to-end products.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full border-t border-zinc-200 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
          Operating Philosophy
        </span>
        <LineMaskSplit
          text="Mindset & Principles"
          tag="h2"
          splitMode="words"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        />
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-[50ch]">
          The core tenets that shape how I learn, build products, and approach engineering problems.
        </p>
      </div>

      {/* 3 Pillars List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.index}
            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm dark:shadow-none flex flex-col justify-between transition-colors"
          >
            <div>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block mb-4">
                {pillar.index}
              </span>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {pillar.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
