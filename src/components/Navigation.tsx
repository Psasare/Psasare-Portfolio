'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { useSound } from './SoundEffects';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accraTime, setAccraTime] = useState('');
  const { isMuted, toggleSound, playClickSound } = useSound();

  // Real-time Accra Time Clock (UTC+0)
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
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'glass-pill shadow-[0_12px_32px_rgba(0,0,0,0.65)] border-white/[0.12] bg-[#0c0c11]/85'
              : 'bg-black/35 backdrop-blur-md border border-white/[0.08]'
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white group no-underline"
            onClick={playClickSound}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white tracking-tight transition-transform group-hover:scale-105 border border-white/20">
              {PORTFOLIO_CONFIG.profile.monogram}
            </span>
            <span className="hidden sm:inline font-medium text-white/90 group-hover:text-white transition-colors">
              {PORTFOLIO_CONFIG.profile.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={playClickSound}
                className="relative rounded-full px-3.5 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Utility: Time Pill + Audio + CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Accra Clock Pill */}
            <div className="hidden lg:flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 border border-white/[0.06] text-[11px] text-white/60 font-mono">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-apple-emerald animate-pulse" />
              <span>Accra {accraTime || '11:00 AM'}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute interactive haptics' : 'Mute haptics'}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-white/70 hover:text-white hover:bg-white/[0.12] transition-colors border border-white/[0.08]"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-apple-azure" />}
            </button>

            {/* Magnetic CTA Button */}
            <div className="hidden sm:block">
              <MagneticButton href="#contact" strength={0.3}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-1.5 text-xs font-semibold hover:bg-apple-light hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
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
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
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
            className="fixed inset-x-4 top-20 z-40 rounded-2xl glass-panel p-6 md:hidden shadow-2xl flex flex-col gap-4 text-center border-white/15"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-lg font-medium text-white/80 hover:text-white border-b border-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col items-center gap-3">
              <span className="text-xs text-white/50 font-mono">
                ACCRA (GMT) // {accraTime || '11:00 AM'}
              </span>
              <a
                href="#contact"
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-full bg-white py-3 text-center text-sm font-semibold text-black"
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
