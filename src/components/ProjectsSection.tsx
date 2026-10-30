'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full bg-[var(--bg-canvas)] pt-28 pb-16 transition-colors duration-400">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 mb-16">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.2em] uppercase bg-apple-azure/10 text-apple-azure border border-apple-azure/20 mb-5 font-semibold">
          <Layers size={13} className="text-apple-azure" />
          <span>CASE STUDIES · 0{PORTFOLIO_CONFIG.projects.length} ARCHITECTURES</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-10">
          <h2 className="font-display fluid-section-title font-extrabold tracking-tight text-[var(--text-primary)] max-w-3xl">
            Engineered for impact. <span className="bg-gradient-to-r from-apple-azure via-cyan-400 to-apple-emerald bg-clip-text text-transparent">Proven in production.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] max-w-md font-normal leading-relaxed">
            Each project is an end-to-end system built to eliminate single points of failure across healthcare, mental health triage, and university academic portals.
          </p>
        </div>
      </div>

      {/* Full-Screen Project Chapters */}
      <div className="flex flex-col">
        {PORTFOLIO_CONFIG.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
