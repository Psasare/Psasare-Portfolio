'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useSound } from '@/components/SoundEffects';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const { playThemeSound } = useSound();

  // Initialize theme from DOM (set by anti-FOUT script) or localStorage
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setThemeState(isDark ? 'dark' : 'light');
    setMounted(true);
  }, []);

  const applyThemeToDOM = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('apple_portfolio_theme', newTheme);
    setThemeState(newTheme);

    // Notify Three.js canvas or other non-react canvas listeners
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme: newTheme } }));
  }, []);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

      // Play audio feedback
      playThemeSound(nextTheme === 'light');

      // Check if user prefers reduced motion
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Check View Transition API support (Chrome, Edge, Safari 18+)
      const doc = document as unknown as {
        startViewTransition?: (callback: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      if (!doc.startViewTransition || prefersReducedMotion) {
        applyThemeToDOM(nextTheme);
        return;
      }

      // Calculate origin for Circular Ripple clip-path
      let x = window.innerWidth / 2;
      let y = 0;

      if (event && (event.clientX || event.clientY)) {
        x = event.clientX;
        y = event.clientY;
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Set data attribute so CSS knows a View Transition is active
      document.documentElement.setAttribute('data-theme-transitioning', 'true');

      const transition = doc.startViewTransition(() => {
        applyThemeToDOM(nextTheme);
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 650,
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)', // Apple exponential decelerate
              pseudoElement: '::view-transition-new(root)',
            }
          ).onfinish = () => {
            document.documentElement.removeAttribute('data-theme-transitioning');
          };
        })
        .catch(() => {
          document.documentElement.removeAttribute('data-theme-transitioning');
        });
    },
    [theme, applyThemeToDOM, playThemeSound]
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      applyThemeToDOM(newTheme);
    },
    [applyThemeToDOM]
  );

  // Global Keyboard Shortcut: Shift + T to toggle theme
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === 'T' || e.key === 't') &&
        e.shiftKey &&
        !['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase() || '')
      ) {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
