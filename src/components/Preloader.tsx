'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth countdown ticker under 1.5s
    const startTime = performance.now();
    const duration = 1400; // 1.4 seconds

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 180);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#070709] px-6 py-10 md:px-16 md:py-14 text-white"
        >
          {/* Top Status */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase text-white/40">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-apple-emerald animate-pulse" />
              <span>ENGINEERING PORTFOLIO // SELECTED WORK</span>
            </div>
            <span className="font-mono">{progress.toString().padStart(3, '0')}%</span>
          </div>

          {/* Center Masked Headline */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent"
              >
                PROSPER SHAIBU ASARE
              </motion.h1>
            </div>

            <div className="overflow-hidden mt-3">
              <motion.p
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.25,
                }}
                className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 text-center font-mono"
              >
                CRAFTING CALM &amp; RESILIENT SOFTWARE · ACCRA
              </motion.p>
            </div>
          </div>

          {/* Bottom Precision Hairline Progress */}
          <div className="w-full">
            <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-apple-azure via-apple-glow to-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-mono text-white/30">
              <span>SYSTEM TOKENS INITIALIZED</span>
              <span>60 FPS SMOOTH ENGINE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
