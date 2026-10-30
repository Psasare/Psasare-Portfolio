'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { useSound } from './SoundEffects';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { ThemeToggle } from './ThemeToggle';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accraTime, setAccraTime] = useState('');
  const { isMuted, toggleSound, playClickSound } = useSound();

  // Real-time Ghana Time Clock (UTC+0)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Accra',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setAccraTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Detect scroll offset
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 md:gap-8 rounded-full px-4 sm:px-5 py-2 transition-all duration-500 ${
            scrolled
              ? 'glass-pill shadow-[0_12px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.65)]'
              : 'bg-[var(--glass-pill-bg)] backdrop-blur-md border border-[var(--border-subtle)]'
          }`}
        >
          {/* Brand Monogram & Name (Montserrat Display) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--text-primary)] group no-underline font-display"
            onClick={playClickSound}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-[11px] font-bold text-[var(--text-primary)] tracking-tight transition-transform group-hover:scale-105 border border-[var(--border-subtle)]">
              {PORTFOLIO_CONFIG.profile.monogram}
            </span>
            <span className="hidden sm:inline font-semibold text-[var(--text-primary)] transition-colors">
              {PORTFOLIO_CONFIG.profile.name}
            </span>
          </a>

          {/* Desktop Nav Links (Inter) */}
          <div className="hidden md:flex items-center gap-1 font-sans">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={playClickSound}
                className="relative rounded-full px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Utility: Time Pill + Audio + Theme Switcher + CTA */}
          <div className="flex items-center gap-2 md:gap-2.5">
            {/* Ho Clock Pill (JetBrains Mono) */}
            <div className="hidden lg:flex items-center gap-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1 border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-mono">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-apple-emerald animate-pulse" />
              <span>Ho {accraTime || '11:00 AM'}</span>
            </div>

            {/* Interactive Animated Theme Switcher */}
            <ThemeToggle />

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute interactive haptics' : 'Mute haptics'}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.05] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition-colors border border-[var(--border-subtle)]"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-apple-azure" />}
            </button>

            {/* Magnetic CTA Button (Inter) */}
            <div className="hidden sm:block font-sans">
              <MagneticButton href="#contact" strength={0.3}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-canvas)] px-4 py-1.5 text-xs font-semibold hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,113,227,0.3)] transition-all">
                  Let&apos;s Connect
                  <ArrowUpRight size={13} />
                </span>
              </MagneticButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-black/[0.05] dark:bg-white/10 text-[var(--text-primary)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl glass-panel p-6 md:hidden shadow-2xl flex flex-col gap-4 text-center border-[var(--border-subtle)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-lg font-medium text-[var(--text-primary)] hover:text-apple-azure border-b border-[var(--border-subtle)] font-sans"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Drawer Theme Row */}
            <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[var(--border-subtle)]">
              <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">INTERFACE THEME</span>
              <ThemeToggle />
            </div>

            <div className="pt-2 flex flex-col items-center gap-3">
              <span className="text-xs text-[var(--text-tertiary)] font-mono">
                HO, GHANA (GMT) // {accraTime || '11:00 AM'}
              </span>
              <a
                href="#contact"
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-full bg-[var(--text-primary)] py-3 text-center text-sm font-semibold text-[var(--bg-canvas)] font-sans"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
