'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'text'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Apple spring physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const dotSpringConfig = { damping: 40, stiffness: 600, mass: 0.2 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Detect touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Attribute listeners for links & interactive project targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="view"]') || target.closest('[data-cursor-project]');
      const interactiveLink = target.closest('a') || target.closest('button') || target.closest('[data-cursor="pointer"]');

      if (projectTarget) {
        setCursorVariant('project');
        setCursorText('VIEW');
      } else if (interactiveLink) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glow Halo / Context Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: cursorVariant === 'project' ? 88 : cursorVariant === 'hover' ? 52 : 36,
          height: cursorVariant === 'project' ? 88 : cursorVariant === 'hover' ? 52 : 36,
          backgroundColor:
            cursorVariant === 'project'
              ? 'rgba(41, 151, 255, 0.92)'
              : cursorVariant === 'hover'
              ? 'rgba(255, 255, 255, 0.14)'
              : 'rgba(255, 255, 255, 0.04)',
          backdropFilter: cursorVariant === 'project' ? 'blur(12px)' : 'blur(4px)',
          border:
            cursorVariant === 'project'
              ? '1px solid rgba(255, 255, 255, 0.4)'
              : cursorVariant === 'hover'
              ? '1px solid rgba(255, 255, 255, 0.35)'
              : '1px solid rgba(255, 255, 255, 0.15)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-semibold tracking-widest text-white drop-shadow-sm"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Aim Point */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-white will-change-transform shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible && cursorVariant !== 'project' ? 1 : 0,
          scale: cursorVariant === 'hover' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

