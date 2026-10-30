'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG, Project } from '@/config/portfolio';
import { DeviceMockup } from '@/components/DeviceMockup';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { MagneticButton } from '@/components/MagneticButton';
import { Navigation } from '@/components/Navigation';
import { CustomCursor } from '@/components/CustomCursor';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export const CaseStudyView: React.FC<{ slug: string }> = ({ slug }) => {
  const projectIndex = PORTFOLIO_CONFIG.projects.findIndex((p) => p.slug === slug);
  const project = PORTFOLIO_CONFIG.projects[projectIndex];

  if (!project) {
    notFound();
  }

  // Next Project index calculation
  const nextIndex = (projectIndex + 1) % PORTFOLIO_CONFIG.projects.length;
  const nextProject = PORTFOLIO_CONFIG.projects[nextIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-400 font-sans">
      <CustomCursor />
      <Navigation />

      {/* Case Study Header Hero */}
      <section className="relative pt-36 pb-16 px-6 md:px-14 lg:px-20 border-b border-[var(--border-subtle)] overflow-hidden">
        {/* Ambient Top Glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[180px] opacity-15 dark:opacity-25"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Back Navigation Breadcrumb (JetBrains Mono) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-mono"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-widest no-underline"
            >
              <ArrowLeft size={14} />
              <span>BACK TO SELECTED WORK</span>
            </Link>
          </motion.div>

          {/* Project Title Block (Montserrat Display) */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4 font-mono text-xs">
              <span className="uppercase tracking-widest text-apple-azure font-medium">
                {project.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
              <span className="text-[var(--text-tertiary)]">{project.year}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)]"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans mt-6 text-xl md:text-2xl text-[var(--text-secondary)] font-normal leading-relaxed"
            >
              {project.summary}
            </motion.p>
          </div>

          {/* Shared Element Device Presentation Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 rounded-3xl glass-panel p-6 sm:p-12 lg:p-16 border-[var(--border-subtle)] flex justify-center"
          >
            <DeviceMockup project={project} />
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout: Sticky Sidebar + Deep Dive Narrative */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-14 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Sidebar: Metadata (JetBrains Mono & Inter) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6 rounded-3xl glass-panel p-6 border-[var(--border-subtle)]">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-azure pb-3 border-b border-[var(--border-subtle)] font-semibold">
                PROJECT SPECIFICATION
              </span>

              <div>
                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase block">MY ROLE</span>
                <span className="text-sm font-semibold text-[var(--text-primary)] mt-1 block font-sans">{project.role}</span>
              </div>

              <div>
                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase block">TIMELINE</span>
                <span className="text-sm font-semibold text-[var(--text-primary)] mt-1 block font-sans">{project.timeline}</span>
              </div>

              <div>
                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase block">CONTEXT / SPONSOR</span>
                <span className="text-sm font-semibold text-[var(--text-primary)] mt-1 block font-sans">{project.clientOrContext}</span>
              </div>

              <div>
                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase block mb-2">TECH ARSENAL</span>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs rounded-full bg-black/[0.03] dark:bg-white/[0.06] border border-[var(--border-subtle)] px-3 py-1 text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-2 font-sans">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-[var(--text-primary)] text-[var(--bg-canvas)] px-4 py-2.5 text-xs font-semibold hover:opacity-90 transition-opacity no-underline"
                  >
                    <span>Launch Prototype</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-black/[0.03] dark:bg-white/[0.06] hover:bg-black/[0.06] dark:hover:bg-white/[0.12] text-[var(--text-primary)] px-4 py-2.5 text-xs font-semibold transition-colors no-underline border border-[var(--border-subtle)]"
                  >
                    <span>Review Source Code</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Right Column: Deep Dive Narrative */}
          <main className="lg:col-span-8 flex flex-col gap-16 font-sans">
            {/* 1. Problem Definition */}
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-rose-500 dark:text-rose-400 mb-2 block font-semibold">
                01 // THE CHALLENGE
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                {project.problem.title}
              </h2>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                {project.problem.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {project.problem.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400 mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Interactive Before vs After Slider */}
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-apple-azure mb-2 block font-semibold">
                02 // QUANTIFIABLE OUTCOMES
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
                Comparative Performance Delta
              </h2>
              <BeforeAfterSlider project={project} />
            </div>

            {/* 3. The Engineered Solution */}
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-apple-emerald mb-2 block font-semibold">
                03 // THE SOLUTION
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                {project.solution.title}
              </h2>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                {project.solution.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {project.solution.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 size={16} className="text-apple-emerald mt-1 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Systems Architecture Breakdown */}
            <div className="rounded-3xl glass-panel p-8 border-[var(--border-subtle)]">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-apple-azure mb-2 block font-semibold">
                04 // SYSTEMS ARCHITECTURE
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">{project.architecture.title}</h3>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.architecture.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 font-sans">
                {project.architecture.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-black/[0.02] dark:bg-white/[0.03] p-4 border border-[var(--border-subtle)] flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                  >
                    <Zap size={16} className="text-apple-azure shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Next Project Footer Seamless Morph */}
      <footer className="relative w-full border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-24 px-6 md:px-14 lg:px-20 overflow-hidden font-sans transition-colors duration-400">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--text-tertiary)] mb-3">
            CONTINUE EXPLORING
          </span>
          <h3 className="text-sm text-[var(--text-secondary)] uppercase tracking-widest font-mono">
            NEXT CASE STUDY (0{nextIndex + 1} / 0{PORTFOLIO_CONFIG.projects.length})
          </h3>

          <Link href={`/projects/${nextProject.slug}`} className="group no-underline my-8">
            <h2 className="font-display text-4xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] group-hover:text-apple-azure transition-colors duration-300">
              {nextProject.title} →
            </h2>
            <p className="font-sans text-sm md:text-lg text-[var(--text-tertiary)] mt-2">{nextProject.tagline}</p>
          </Link>

          <MagneticButton href={`/projects/${nextProject.slug}`} strength={0.3} dataCursor="view">
            <span className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3 text-sm font-semibold text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/10 transition-all font-sans">
              Load Next Chapter
              <ChevronRight size={16} />
            </span>
          </MagneticButton>
        </div>
      </footer>
    </div>
  );
};
