'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full bg-[var(--bg-canvas)] pt-24 pb-12 transition-colors duration-400">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-apple-azure mb-4">
          <Layers size={14} className="text-apple-azure" />
          <span>SELECTED CASE STUDIES ({PORTFOLIO_CONFIG.projects.length})</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-10">
          <h2 className="font-display fluid-section-title font-bold tracking-tight text-[var(--text-primary)] max-w-3xl">
            Software engineered for real human impact.
          </h2>
          <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] max-w-md font-normal leading-relaxed">
            Each project is an end-to-end production build solving critical bottlenecks across Ghana&apos;s healthcare, student wellness, and university academic infrastructure.
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
