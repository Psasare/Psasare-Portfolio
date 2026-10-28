import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#070709] text-white flex flex-col items-center justify-center px-6 text-center selection:bg-apple-azure selection:text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute h-[350px] w-[350px] rounded-full bg-apple-azure/10 blur-[130px]" />

      <div className="relative z-10 max-w-md flex flex-col items-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-apple-glow mb-3">
          ERROR 404 // SYSTEM ROUTE
        </span>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          Lost in the void.
        </h1>

        <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed mb-8">
          The requested system node or case study does not exist or has been relocated to another sector.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-xs font-semibold hover:bg-apple-light transition-all shadow-lg font-sans no-underline"
        >
          <ArrowLeft size={14} />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
