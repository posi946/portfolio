import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('#app-content > section', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-800 dark:selection:text-zinc-100 transition-colors duration-200"
    >
      {/* Floating Navigation */}
      <Navbar />

      {/* Main Editorial Flow */}
      <main id="app-content" className="flex flex-col">
        <Hero />
        <AboutStory />
        <Philosophy />
        <Projects />
      </main>

      {/* Footer with Signature and Contact */}
      <ContactFooter />
    </div>
  );
}

export default App;
