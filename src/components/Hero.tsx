'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { HeroCanvas } from './HeroCanvas';
import { MagneticButton } from './MagneticButton';
import { FileText, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP Staggered Mask Line Reveal
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-mask-line',
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.15,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      gsap.fromTo(
        '.hero-fade-item',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.55,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* 3D Interactive WebGL Canvas */}
      <HeroCanvas />

      {/* Top Status Capsule (JetBrains Mono) */}
      <div className="hero-fade-item relative z-10 mx-auto mb-6">
        <div className="inline-flex items-center gap-2.5 rounded-full glass-pill px-4 py-1.5 shadow-lg border-white/10 hover:border-white/20 transition-all font-mono text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-apple-emerald" />
          </span>
          <span className="text-white/85">
            {PORTFOLIO_CONFIG.profile.availability}
          </span>
        </div>
      </div>

      {/* Center Cinematic Headline (Montserrat Display) */}
      <div className="relative z-10 mx-auto max-w-5xl text-center my-auto flex flex-col items-center">
        <h1
          ref={headlineRef}
          className="font-display fluid-hero font-extrabold tracking-[-0.035em] text-white select-none max-w-4xl"
        >
          <span className="mask-line-container block">
            <span className="hero-mask-line block text-white drop-shadow-sm">
              Systems engineered
            </span>
          </span>
          <span className="mask-line-container block">
            <span className="hero-mask-line block text-white/90">
              to never fail.
            </span>
          </span>
        </h1>

        {/* Positioning Paragraph (Inter Body) */}
        <p className="hero-fade-item font-sans mt-6 md:mt-8 max-w-2xl text-base md:text-xl font-normal leading-relaxed text-white/70">
          <strong className="text-white font-medium">{PORTFOLIO_CONFIG.profile.name}</strong> &mdash; {PORTFOLIO_CONFIG.profile.tagline}{' '}
          <span className="text-white/45 block sm:inline mt-1 sm:mt-0 font-normal">
            Final-year Computer Science candidate building resilient AI, maternal telemetry, and offline-first distributed systems.
          </span>
        </p>

        {/* Action Magnetic Buttons (Inter Semi-Bold) */}
        <div className="hero-fade-item mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 font-sans">
          <MagneticButton href="#projects" strength={0.25} dataCursor="pointer">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black hover:bg-apple-light shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
              Explore Selected Work
              <ChevronRight size={16} />
            </span>
          </MagneticButton>

          <MagneticButton href="#about" strength={0.25} dataCursor="pointer">
            <span className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/[0.12] transition-all">
              <FileText size={16} className="text-apple-glow" />
              Philosophy &amp; Bio
            </span>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Scroll Cue (JetBrains Mono) */}
      <div className="hero-fade-item relative z-10 flex flex-col items-center justify-center pt-8">
        <a
          href="#statement"
          className="group flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/40 hover:text-white/80 transition-colors no-underline"
          aria-label="Scroll to explore"
        >
          <span>Scroll to explore</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="h-1.5 w-1.5 rounded-full bg-apple-azure shadow-[0_0_8px_#0071e3]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
