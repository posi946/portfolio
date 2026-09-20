import { useState } from 'react';
import { X } from 'lucide-react';
import { ThreeDSplitCard } from './ThreeDSplitCard';
import { LineMaskSplit } from './LineMaskSplit';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  clientType: string;
  year: string;
  problem: string;
  dataAngle: string;
  engineeringSolution: string;
  metrics: { label: string; value: string; detail: string }[];
  stack: string[];
}

export const Projects = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    {
      id: 'datapulse',
      title: 'DataPulse Analytics Engine',
      subtitle: 'SME Transaction Telemetry & Runway Forecasting',
      category: 'Data & Systems',
      clientType: 'Product Prototype / Freelance',
      year: '2024',
      problem: 'Small businesses often have thousands of unorganized transaction rows, leaving owners blind to true burn rates and runway limits.',
      dataAngle: 'Architected an aggregation layer that computes rolling burn rate, customer acquisition variance, and 90-day cash buffer probability prior to rendering.',
      engineeringSolution: 'Lightweight TypeScript engine with sub-80ms recalculations, zero heavy graphing dependencies, and automated alerting on critical burn deviations.',
      metrics: [
        { label: 'Reconciliation', value: '< 80ms', detail: 'Real-time JSON/CSV processing' },
        { label: 'Accuracy', value: '+38%', detail: 'Benchmarked on 6-month historicals' },
        { label: 'Data Integrity', value: '100%', detail: 'Strict schema validation' },
      ],
      stack: ['TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Data Pipelines'],
    },
    {
      id: 'omniflow',
      title: 'OmniFlow AI Video Studio',
      subtitle: 'Multi-Agent Automated Video Pipeline',
      category: 'AI & Automation',
      clientType: 'Freelance Client Deliverable',
      year: '2024',
      problem: 'Content creators spend hours manually writing hooks, timing captions, and cropping video variations across platforms.',
      dataAngle: 'Analyzed audience retention drop-offs across 200+ viral short-form clips to programmatically calculate optimal hook pacing and caption timestamps.',
      engineeringSolution: 'Multi-agent orchestration pipeline using Claude and Gemini to script, review, and batch-render video assets with standardized typography.',
      metrics: [
        { label: 'Production Time', value: '10x Faster', detail: 'From 14 hours to 90 minutes weekly' },
        { label: 'Multi-Format', value: '3 Ratios', detail: 'Simultaneous 9:16, 1:1, and 16:9' },
        { label: 'Consistency', value: '+240%', detail: 'Higher posting cadence' },
      ],
      stack: ['Node.js', 'Claude API', 'Gemini API', 'FFmpeg Scripts', 'Automation'],
    },
    {
      id: 'campusnest',
      title: 'CampusNest Babcock Hub',
      subtitle: 'Peer-to-Peer Student Marketplace & Resource Exchange',
      category: 'Web Application',
      clientType: 'Babcock Student Initiative',
      year: '2024',
      problem: 'Babcock students constantly face fragmented WhatsApp group chaos when trying to buy textbooks, pass down hostel appliances, or share past questions.',
      dataAngle: 'Mapped semester cycle demand surges (exam prep vs hostel move-ins) to prioritize fast index search and verified student authentication.',
      engineeringSolution: 'Progressive Web App with offline-first caching, instant fuzzy search, peer chat, and Babcock domain email verification.',
      metrics: [
        { label: 'Student Beta', value: '250+ Users', detail: 'Across engineering & science faculties' },
        { label: 'Trade Latency', value: '< 2 Hours', detail: 'Down from multi-day WhatsApp threads' },
        { label: 'Mobile Lighthouse', value: '98 / 100', detail: 'Fast on mobile data networks' },
      ],
      stack: ['React', 'Supabase', 'PWA', 'Tailwind CSS', 'Vite'],
    },
    {
      id: 'auraclient',
      title: 'Aura Studio Digital',
      subtitle: 'High-Performance Brand Presence & Intake Portal',
      category: 'Frontend Engineering',
      clientType: 'Agency Client Deliverable',
      year: '2024',
      problem: 'A creative agency needed a sleek, memorable web presence without heavy frameworks that destroy mobile conversions.',
      dataAngle: 'Tracked user drop-offs against layout shifts and bloated bundle sizes, demonstrating that a 400ms speed improvement increases inquiry rates by 35%.',
      engineeringSolution: 'Lean frontend architecture with zero heavy library overhead, custom CSS transitions, hardware-accelerated motion, and frictionless inquiry forms.',
      metrics: [
        { label: 'First Paint', value: '0.4s', detail: 'Instantaneous load on mobile' },
        { label: 'Inbound Inquiries', value: '+45%', detail: 'Direct form conversion increase' },
        { label: 'Accessibility', value: '100%', detail: 'Full WCAG AA compliance' },
      ],
      stack: ['Vite', 'Vanilla CSS & JS', 'GSAP Motion', 'Responsive Architecture'],
    },
  ];

  return (
    <section id="works" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full border-t border-zinc-200 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="space-y-2 mb-10">
        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
          Selected Work
        </span>
        <LineMaskSplit
          text="Systems & Deliverables"
          tag="h2"
          splitMode="words"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        />
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-[55ch]">
          Interactive 3D split perspective cards. Hover or tap to separate depth layers. Click any card for detailed specifications.
        </p>
      </div>

      {/* 3D Split Cards Grid: 1 col on mobile, 2 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ThreeDSplitCard
            key={p.id}
            title={p.title}
            subtitle={p.subtitle}
            category={p.category}
            metrics={p.metrics.map((m) => `${m.label}: ${m.value}`)}
            tags={p.stack}
            onSelect={() => setSelectedModalProject(p)}
          />
        ))}
      </div>

      {/* Clean Minimalist Modal */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[88vh] overflow-y-auto">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedModalProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 pr-8">
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                {selectedModalProject.category} · {selectedModalProject.year}
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-1 tracking-tight">
                {selectedModalProject.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                {selectedModalProject.subtitle}
              </p>
            </div>

            {/* Body */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
                  Problem & Context
                </span>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {selectedModalProject.problem}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800">
                <span className="text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase block mb-1 font-semibold">
                  The Data & Numbers Angle
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedModalProject.dataAngle}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
                  Engineering Solution
                </span>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {selectedModalProject.engineeringSolution}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-3">
                Key Metrics
              </span>
              <div className="grid grid-cols-3 gap-2">
                {selectedModalProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-md bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 text-center sm:text-left">
                    <span className="text-xs sm:text-sm font-semibold font-mono text-zinc-900 dark:text-zinc-100 block">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedModalProject.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
