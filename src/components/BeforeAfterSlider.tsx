'use client';

import React, { useState, useRef } from 'react';
import { Project } from '@/config/portfolio';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  project: Project;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ project }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.max(10, Math.min(90, position)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 select-none">
      <div className="flex items-center justify-between text-xs font-mono text-white/50">
        <span className="flex items-center gap-1.5 text-rose-400">
          <AlertCircle size={14} /> {project.beforeAfter.beforeLabel}
        </span>
        <span className="text-[11px] uppercase tracking-wider text-white/30 hidden sm:inline">
          DRAG TO COMPARE IMPACT
        </span>
        <span className="flex items-center gap-1.5 text-apple-emerald">
          <CheckCircle2 size={14} /> {project.beforeAfter.afterLabel}
        </span>
      </div>

      {/* Interactive Dual Comparison Stage */}
      <div
        ref={containerRef}
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden cursor-ew-resize border border-white/10 glass-panel shadow-2xl"
      >
        {/* Left Side (Before State - Red Tinted / Legacy) */}
        <div className="absolute inset-0 bg-[#161214] p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400/80 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
              BEFORE INTERVENTION
            </span>
            <div className="mt-4">
              <span className="text-4xl md:text-5xl font-bold font-mono text-rose-400">
                {project.beforeAfter.beforeMetric}
              </span>
              <p className="mt-2 text-sm text-white/60 max-w-xs leading-relaxed">
                {project.beforeAfter.beforeDesc}
              </p>
            </div>
          </div>
          <span className="text-xs text-rose-300/40 font-mono">STATUS: BOTTLENECK / LOSS</span>
        </div>

        {/* Right Side (After State - Green Tinted / Modern) */}
        <div
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          className="absolute inset-0 bg-[#0d1612] p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="ml-auto text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-apple-emerald bg-apple-emerald/10 px-2 py-0.5 rounded border border-apple-emerald/20">
              WITH DIGITAL ARCHITECTURE
            </span>
            <div className="mt-4">
              <span className="text-4xl md:text-5xl font-bold font-mono text-apple-emerald">
                {project.beforeAfter.afterMetric}
              </span>
              <p className="mt-2 text-sm text-white/70 max-w-xs ml-auto leading-relaxed">
                {project.beforeAfter.afterDesc}
              </p>
            </div>
          </div>
          <span className="text-xs text-apple-emerald/50 font-mono ml-auto">STATUS: OPTIMIZED PRODUCTION</span>
        </div>

        {/* Drag Divider Line */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white text-black shadow-lg flex items-center justify-center text-xs font-bold font-mono">
            ↔
          </div>
        </div>
      </div>
    </div>
  );
};

