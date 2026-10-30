'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight, Copy, Check, Github, Linkedin, ArrowUp, Mail } from 'lucide-react';
import { useSound } from './SoundEffects';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { playSuccessSound, playClickSound } = useSound();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.profile.email);
    setCopied(true);
    playSuccessSound();
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[var(--bg-canvas)] pt-28 pb-12 px-6 md:px-14 lg:px-20 overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-400">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-apple-azure/10 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
        {/* Top Callout */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-apple-emerald/25 bg-apple-emerald/10 text-xs font-mono text-apple-emerald mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-apple-emerald animate-pulse" />
            <span className="font-semibold tracking-wider">OPEN FOR ENGINEERING ROLES &amp; FELLOWSHIPS</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] max-w-3xl">
            Have an ambitious system to build? <span className="bg-gradient-to-r from-apple-azure to-cyan-400 bg-clip-text text-transparent">Let us talk.</span>
          </h2>

          <p className="font-sans mt-5 text-base md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
            Currently accepting software engineering interviews, research fellowships, and high-impact software contracts worldwide.
          </p>

          {/* Huge Magnetic Email Link (Montserrat Display) */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <MagneticButton href={`mailto:${PORTFOLIO_CONFIG.profile.email}`} strength={0.25} dataCursor="pointer">
              <span className="font-display group relative inline-block text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[var(--text-primary)] hover:text-apple-azure transition-colors py-2">
                {PORTFOLIO_CONFIG.profile.email}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-apple-azure to-cyan-400 group-hover:w-full transition-all duration-500" />
              </span>
            </MagneticButton>

            {/* Quick Copy Pill */}
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full bg-black/[0.03] dark:bg-white/[0.06] hover:bg-black/[0.06] dark:hover:bg-white/[0.12] border border-[var(--border-subtle)] px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-sm font-medium"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-apple-emerald" />
                    <span className="text-apple-emerald font-semibold">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>

              {PORTFOLIO_CONFIG.profile.altEmail && (
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.profile.altEmail}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] border border-[var(--border-subtle)] px-3 py-2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-all no-underline"
                >
                  <Mail size={12} />
                  <span>Backup: {PORTFOLIO_CONFIG.profile.altEmail}</span>
                </a>
              )}
            </div>
          </div>

          {/* Social Links (Inter) */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 font-sans">
            <MagneticButton href={PORTFOLIO_CONFIG.profile.social.github} strength={0.3}>
              <span className="inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/10 transition-all border border-[var(--border-subtle)]">
                <Github size={15} />
                GitHub
                <ArrowUpRight size={13} className="text-[var(--text-tertiary)]" />
              </span>
            </MagneticButton>

            <MagneticButton href={PORTFOLIO_CONFIG.profile.social.linkedin} strength={0.3}>
              <span className="inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/10 transition-all border border-[var(--border-subtle)]">
                <Linkedin size={15} />
                LinkedIn
                <ArrowUpRight size={13} className="text-[var(--text-tertiary)]" />
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Footer Sub-Bar (JetBrains Mono) */}
        <div className="mt-20 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-tertiary)] font-mono">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.profile.name}</span>
            <span>·</span>
            <span>HO, GHANA</span>
          </div>

          <div className="flex items-center gap-6">
            <span>ENGINEERED WITH SURGICAL RESTRAINT</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
