'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '@/config/portfolio';
import { DeviceMockup } from './DeviceMockup';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useSound } from './SoundEffects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const { playClickSound } = useSound();

  useEffect(() => {
    if (!cardRef.current || !visualRef.current) return;

    // GSAP ScrollTrigger: Card scales up from inset to full-bleed as it scrolls into center
    const ctx = gsap.context(() => {
      gsap.fromTo(
        visualRef.current,
        {
          scale: 0.93,
          borderRadius: '32px',
        },
        {
          scale: 1,
          borderRadius: '24px',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'center 45%',
            scrub: 1,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={cardRef}
      id={`project-${project.slug}`}
      className="relative min-h-[95vh] w-full flex flex-col justify-center py-20 px-6 md:px-14 lg:px-20 border-b border-[var(--border-subtle)] overflow-hidden transition-colors duration-400"
    >
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] rounded-full blur-[160px] opacity-15 dark:opacity-20"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Project Header Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3 font-mono">
              <span className="text-xs tracking-widest uppercase text-apple-azure font-medium">
                {project.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
              <span className="text-xs text-[var(--text-tertiary)]">{project.year}</span>
            </div>

            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="font-sans mt-2 text-base md:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* CTA Link to Case Study */}
          <div className="shrink-0 font-sans">
            <Link href={`/projects/${project.slug}`} onClick={playClickSound} className="no-underline">
              <MagneticButton strength={0.3} dataCursor="view">
                <span
                  style={{ borderColor: project.accentColor }}
                  className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3 text-sm font-semibold text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/10 transition-all shadow-md hover:shadow-cyan-500/10"
                >
                  Read Case Study
                  <ArrowUpRight size={16} className="text-apple-azure" />
                </span>
              </MagneticButton>
            </Link>
          </div>
        </div>

        {/* Scaled Visual Presentation Stage */}
        <div
          ref={visualRef}
          data-cursor="view"
          className="relative w-full rounded-[32px] glass-panel p-6 md:p-12 lg:p-14 overflow-hidden border-[var(--border-subtle)] group transition-all"
        >
          {/* Ambient Glass Highlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br from-white via-transparent to-black"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Device Mockup Interactive Render */}
            <div className="lg:col-span-7 flex justify-center">
              <Link href={`/projects/${project.slug}`} onClick={playClickSound} className="w-full no-underline">
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                  <DeviceMockup project={project} />
                </div>
              </Link>
            </div>

            {/* Right: Key Quantitative Metrics & Tech Architecture */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] block mb-2">
                  MEASURED IMPACT
                </span>
                <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Animated Counters Grid (JetBrains Mono) */}
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric, i) => (
                  <MetricCard key={i} metric={metric} isInView={isInView} delay={i * 0.1} />
                ))}
              </div>

              {/* Stack Pills (JetBrains Mono) */}
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-2">
                  ENGINEERING STACK
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-[var(--border-subtle)] px-3 py-1 text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Context Badge */}
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-tertiary)] font-mono">
                <span className="truncate">Role: {project.role}</span>
                <span className="shrink-0 text-apple-emerald flex items-center gap-1 font-semibold">
                  <CheckCircle2 size={12} /> Production Pilot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

/* -------------------------------------------------------------
 * Animated Counter HUD Component (JetBrains Mono)
 * ------------------------------------------------------------- */
const MetricCard: React.FC<{ metric: { label: string; value: string; unit?: string }; isInView: boolean; delay: number }> = ({
  metric,
  isInView,
  delay,
}) => {
  const [count, setCount] = useState(0);

  // Parse numeric portion if valid
  const rawNumber = parseFloat(metric.value.replace(/,/g, ''));
  const isNumeric = !isNaN(rawNumber);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let startTime: number;
    const duration = 1400; // 1.4s

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * rawNumber));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(rawNumber);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, rawNumber, isNumeric, delay]);

  return (
    <div className="rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-[var(--border-subtle)] p-3.5 hover:border-[var(--border-strong)] transition-all font-mono">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
          {isNumeric ? count.toLocaleString() : metric.value}
        </span>
        {metric.unit && <span className="text-sm font-semibold text-apple-azure">{metric.unit}</span>}
      </div>
      <span className="text-xs text-[var(--text-secondary)] block mt-1 leading-tight font-sans">{metric.label}</span>
    </div>
  );
};
