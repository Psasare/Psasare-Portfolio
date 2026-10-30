'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to Light theme (Shift+T)' : 'Switch to Dark theme (Shift+T)'}
      title={isDark ? 'Switch to Light theme (Shift+T)' : 'Switch to Dark theme (Shift+T)'}
      className={`relative group flex h-8 w-8 items-center justify-center rounded-full glass-pill text-white/80 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-azure ${
        isDark
          ? 'hover:text-amber-300 hover:shadow-[0_0_15px_rgba(253,224,71,0.25)]'
          : 'hover:text-apple-azure hover:shadow-[0_0_15px_rgba(0,113,227,0.25)]'
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <Moon size={14} className="text-apple-glow group-hover:text-amber-300 transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 40, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -40, scale: 0.6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <Sun size={15} className="text-amber-500 group-hover:text-amber-600 transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

