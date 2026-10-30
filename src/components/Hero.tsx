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
        <div className="inline-flex items-center gap-2.5 rounded-full glass-pill px-4 py-1.5 shadow-lg border border-[var(--border-subtle)] font-mono text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-apple-emerald" />
          </span>
          <span className="text-[var(--text-secondary)] font-medium">
            AVAILABLE FOR HIGH-IMPACT ROLES
          </span>
          <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
          <span className="text-[var(--text-tertiary)]">HO / ACCRA, GHANA</span>
        </div>
      </div>

      {/* Center Cinematic Headline (Montserrat Display) */}
      <div className="relative z-10 mx-auto max-w-5xl text-center my-auto flex flex-col items-center">
        <h1
          ref={headlineRef}
          className="font-display fluid-hero font-extrabold tracking-[-0.035em] text-[var(--text-primary)] select-none max-w-4xl"
        >
          <span className="mask-line-container block">
            <span className="hero-mask-line block text-[var(--text-primary)] drop-shadow-sm">
              Systems built for
            </span>
          </span>
          <span className="mask-line-container block mt-1">
            <span className="hero-mask-line block bg-gradient-to-r from-apple-azure via-cyan-400 to-apple-emerald bg-clip-text text-transparent pb-1">
              the real world.
            </span>
          </span>
        </h1>

        {/* Positioning Paragraph (Inter Body) */}
        <p className="hero-fade-item font-sans mt-8 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--text-primary)]">{PORTFOLIO_CONFIG.profile.name}</span>
          <span className="mx-2 text-apple-azure font-bold">·</span>
          <span>{PORTFOLIO_CONFIG.profile.role}</span>
          <span className="block mt-2 text-sm sm:text-base text-[var(--text-tertiary)] leading-relaxed">
            Architecting offline-first mobile applications, maternal healthcare telemetry, and high-concurrency academic platforms tailored for West Africa.
          </span>
        </p>

        {/* Action Magnetic Buttons (Inter Semi-Bold) */}
        <div className="hero-fade-item mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 font-sans">
          <MagneticButton href="#projects" strength={0.25} dataCursor="pointer">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-canvas)] px-7 py-3.5 text-sm font-semibold hover:opacity-90 shadow-lg hover:shadow-cyan-500/15 transition-all">
              Explore Selected Work
              <ChevronRight size={16} />
            </span>
          </MagneticButton>

          <MagneticButton href="#about" strength={0.25} dataCursor="pointer">
            <span className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3.5 text-sm font-medium text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/[0.12] transition-all">
              <FileText size={16} className="text-apple-azure" />
              Philosophy &amp; Bio
            </span>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Scroll Cue (JetBrains Mono) */}
      <div className="hero-fade-item relative z-10 flex flex-col items-center justify-center pt-8">
        <a
          href="#statement"
          className="group flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors no-underline"
          aria-label="Scroll to explore"
        >
          <span>Scroll to explore</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--border-subtle)] p-1">
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
