import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div
        className={`w-full max-w-4xl rounded-full border transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 ${
          scrolled
            ? 'bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 shadow-sm'
            : 'bg-white/70 dark:bg-zinc-950/50 backdrop-blur-sm border-zinc-200/80 dark:border-zinc-800/80'
        }`}
      >
        {/* Brand identity */}
        <a
          href="#"
          className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity focus-visible:outline-none"
        >
          Mubarak Lawal
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 px-3 py-1.5 rounded-full transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Switcher + CTA */}
        <div className="flex items-center gap-2">
          {/* Framer Theme Switcher */}
          <ThemeSwitcher />

          {/* Minimalist CTA */}
          <a
            href="#contact"
            className="tactile-btn hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-xl pointer-events-auto md:hidden flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/40"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="tactile-btn mt-2 flex items-center justify-center gap-1.5 text-xs font-medium bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 py-2.5 rounded-xl"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
