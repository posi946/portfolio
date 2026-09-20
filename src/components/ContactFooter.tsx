import { useState, useEffect } from 'react';
import { Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { CopyEmail } from './CopyEmail';
import { Signature } from './Signature';

export const ContactFooter = () => {
  const [time, setTime] = useState<string>('');
  const email = "mubaraklawal.dev@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Lagos, Nigeria is UTC+1 (WAT)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800/80 pt-20 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-4xl mx-auto flex flex-col gap-14">
        {/* Contact Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-3 max-w-[48ch]">
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              Contact & Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Let’s build something real together.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
              Available for freelance web builds, custom data interfaces, AI video pipelines, and ambitious software ideas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}?subject=Project%20Inquiry`}
              className="tactile-btn inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-xs font-mono font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send an Email</span>
            </a>

            <a
              href="https://wa.me/2349015541927?text=Hi%20Mubarak,%20I%20came%20across%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Framer Email Copy Component */}
            <CopyEmail email={email} />
          </div>
        </div>

        {/* The Signature Component (Framer Sign-Component: "mubarak") */}
        <div className="flex flex-col items-center justify-center py-6">
          <Signature />
        </div>

        {/* Footer Meta: Location, Time, Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono">
          {/* Location & Time */}
          <div className="space-y-1.5">
            <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block text-[10px]">
              Location & Time
            </span>
            <div className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
              <MapPin className="w-3 h-3 text-zinc-400" />
              <span>Babcock University, Nigeria</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
              <Clock className="w-3 h-3 text-zinc-400" />
              <span>{time ? `${time} WAT` : 'WAT (UTC+1)'}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-1.5">
            <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block text-[10px]">
              Networks
            </span>
            <div className="flex flex-wrap gap-2 pt-0.5">
              <a
                href="https://github.com/posi946"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors"
              >
                GitHub
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <a
                href="https://wa.me/2349015541927?text=Hi%20Mubarak,%20I%20came%20across%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors"
              >
                WhatsApp (+234 901 554 1927)
              </a>
            </div>
          </div>

          {/* Academic Info */}
          <div className="space-y-1.5">
            <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block text-[10px]">
              Status
            </span>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans">
              200-Level Software Engineering student. Building products, data pipelines & AI tools.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <span>&copy; {new Date().getFullYear()} Mubarak Lawal</span>
          <span>Designed with numbers, code & restraint</span>
        </div>
      </div>
    </footer>
  );
};
