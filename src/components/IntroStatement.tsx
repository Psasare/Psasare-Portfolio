'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const IntroStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const statement =
    "Great engineering is quiet. In emerging markets, building software is never just about code: it is about bandwidth resilience, cultural empathy, and systems that refuse to fail when human lives depend on them.";

  const words = statement.split(' ');

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const wordSpans = textRef.current?.querySelectorAll('.statement-word');
      if (!wordSpans || wordSpans.length === 0) return;

      gsap.fromTo(
        wordSpans,
        {
          opacity: 0.16,
          filter: 'blur(3px)',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="statement"
      ref={containerRef}
      className="relative min-h-[75vh] w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-28 border-y border-[var(--border-subtle)] bg-[var(--bg-canvas)] transition-colors duration-400"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-[480px] w-[480px] rounded-full bg-apple-azure/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Subtitle Pill (JetBrains Mono) */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.2em] uppercase bg-apple-azure/10 text-apple-azure border border-apple-azure/20 shadow-sm font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-apple-azure" />
          <span>ENGINEERING CREED</span>
        </div>

        {/* Word-by-Word Scrubbed Paragraph (Montserrat Display) */}
        <p
          ref={textRef}
          className="font-display fluid-statement font-semibold tracking-[-0.025em] leading-[1.3] text-[var(--text-primary)] select-none"
        >
          {words.map((word, index) => {
            const isHighlight =
              word.includes('bandwidth') ||
              word.includes('resilience') ||
              word.includes('cultural') ||
              word.includes('empathy');

            return (
              <span
                key={index}
                className={`statement-word inline-block mr-[0.28em] transition-all will-change-[opacity,transform,filter] ${
                  isHighlight ? 'text-apple-azure font-bold' : ''
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Context Signature (Inter + JetBrains Mono) */}
        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-[var(--text-tertiary)] font-sans">
          <span className="h-px w-10 bg-[var(--border-subtle)]" />
          <span>
            {PORTFOLIO_CONFIG.profile.name} <span className="mx-1 text-apple-azure">/</span> <span className="font-mono text-xs">{PORTFOLIO_CONFIG.profile.location}</span>
          </span>
          <span className="h-px w-10 bg-[var(--border-subtle)]" />
        </div>
      </div>
    </section>
  );
};
