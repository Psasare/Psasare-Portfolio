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
    "Great engineering is quiet. In emerging markets, building software isn't just about code—it's about bandwidth resilience, cultural empathy, and systems that refuse to fail when human lives depend on them.";

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
          color: 'rgba(255, 255, 255, 0.2)',
          filter: 'blur(3px)',
        },
        {
          opacity: 1,
          color: '#ffffff',
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
      className="relative min-h-[75vh] w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-28 border-y border-white/[0.06] bg-[#09090c]"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-[480px] w-[480px] rounded-full bg-apple-azure/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Apple Subtitle Pill */}
        <div className="mb-6 inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-apple-glow">
          <span className="h-1.5 w-1.5 rounded-full bg-apple-azure" />
          CORE ENGINEERING CREED
        </div>

        {/* Word-by-Word Scrubbed Paragraph */}
        <p
          ref={textRef}
          className="fluid-statement font-medium tracking-tight leading-[1.3] text-white/20 select-none"
        >
          {words.map((word, index) => (
            <span key={index} className="statement-word inline-block mr-[0.28em] transition-all will-change-[opacity,transform,filter]">
              {word}
            </span>
          ))}
        </p>

        {/* Context Signature */}
        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-white/40">
          <span className="h-px w-10 bg-white/20" />
          <span>Kwame Asare · Accra, Ghana</span>
          <span className="h-px w-10 bg-white/20" />
        </div>
      </div>
    </section>
  );
};

