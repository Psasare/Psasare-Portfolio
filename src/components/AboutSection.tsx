'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { GraduationCap, Award, MapPin, Terminal, Code2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(PORTFOLIO_CONFIG.skills[0].category);

  return (
    <section id="about" className="relative w-full bg-[var(--bg-canvas)] py-28 px-6 md:px-14 lg:px-20 border-b border-[var(--border-subtle)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.2em] uppercase bg-apple-azure/10 text-apple-azure border border-apple-azure/20 mb-5 font-semibold">
            <Terminal size={13} className="text-apple-azure" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="font-display fluid-section-title font-extrabold tracking-tight text-[var(--text-primary)]">
            Curiosity in theory. <span className="bg-gradient-to-r from-apple-azure via-cyan-400 to-apple-emerald bg-clip-text text-transparent">Ground reality in practice.</span>
          </h2>
        </div>

        {/* Cinematic 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story + Academic Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="prose prose-invert max-w-none">
              <p className="font-sans text-xl md:text-2xl font-medium text-[var(--text-primary)] leading-snug">
                {PORTFOLIO_CONFIG.about.lead}
              </p>

              <div className="mt-6 flex flex-col gap-4 text-base text-[var(--text-secondary)] leading-relaxed font-normal font-sans">
                {PORTFOLIO_CONFIG.about.storyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Academic Highlights & Accolades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl glass-panel p-5 border border-[var(--border-subtle)] hover:border-apple-azure/40 transition-colors">
                <div className="flex items-center gap-3 mb-2 text-apple-azure">
                  <GraduationCap size={20} />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">ACADEMIC FOUNDATION</span>
                </div>
                <h4 className="font-display text-base font-bold text-[var(--text-primary)]">BSc Computer Science</h4>
                <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">University of Ghana</p>
                <span className="inline-block mt-2.5 text-[11px] font-mono text-apple-emerald bg-apple-emerald/10 border border-apple-emerald/20 px-2.5 py-0.5 rounded-full font-semibold">
                  Second Class Honours (Upper Division)
                </span>
              </div>

              <div className="rounded-2xl glass-panel p-5 border border-[var(--border-subtle)] hover:border-apple-azure/40 transition-colors">
                <div className="flex items-center gap-3 mb-2 text-apple-azure">
                  <Award size={20} />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">INNOVATION RECOGNITION</span>
                </div>
                <h4 className="font-display text-base font-bold text-[var(--text-primary)]">National Healthtech Hackathon</h4>
                <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">1st Place Winner (Maternal Telemetry System)</p>
                <span className="inline-block mt-2.5 text-[11px] font-mono text-apple-azure bg-apple-azure/10 border border-apple-azure/20 px-2.5 py-0.5 rounded-full font-semibold">
                  Final-Year Capstone Honors
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card + Interactive Skills Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Portrait / Identity Glass Card */}
            <div className="relative rounded-3xl glass-panel p-6 border border-[var(--border-subtle)] overflow-hidden shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-apple-azure via-blue-600 to-cyan-400 p-[2px] shadow-lg">
                    <div className="h-full w-full rounded-2xl bg-[var(--bg-canvas)] flex items-center justify-center font-display font-bold text-[var(--text-primary)] text-sm tracking-tight">
                      {PORTFOLIO_CONFIG.profile.monogram}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[var(--text-primary)]">{PORTFOLIO_CONFIG.profile.name}</h3>
                    <p className="font-sans text-xs text-[var(--text-tertiary)] flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-apple-azure" />
                      {PORTFOLIO_CONFIG.profile.location}
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-[10px] uppercase text-[var(--text-tertiary)] block">STATUS</span>
                  <span className="text-xs font-semibold text-apple-emerald font-sans">Available Q1 2026</span>
                </div>
              </div>

              {/* Bio Highlights Stats */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {PORTFOLIO_CONFIG.about.stats.map((stat, i) => (
                  <div key={i} className="rounded-xl bg-black/[0.02] dark:bg-white/[0.03] p-3 border border-[var(--border-subtle)]">
                    <span className="font-mono text-lg font-bold text-[var(--text-primary)] block">{stat.value}</span>
                    <span className="font-sans text-[11px] text-[var(--text-secondary)] block mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-[var(--text-tertiary)] font-mono">
                <span>IDENTITY: VERIFIED</span>
                <span className="text-apple-azure font-medium">PSASARE-GH-2026</span>
              </div>
            </div>

            {/* Interactive Skills Matrix */}
            <div className="rounded-3xl glass-panel p-6 border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-apple-azure flex items-center gap-1.5 font-semibold">
                  <Code2 size={13} /> TECHNICAL ARSENAL
                </span>
                <span className="text-[10px] text-[var(--text-tertiary)] font-mono">CLICK CATEGORY</span>
              </div>

              {/* Category Tabs (Inter) */}
              <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[var(--border-subtle)] font-sans">
                {PORTFOLIO_CONFIG.skills.map((skillGroup) => (
                  <button
                    key={skillGroup.category}
                    onClick={() => setActiveCategory(skillGroup.category)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      activeCategory === skillGroup.category
                        ? 'bg-apple-azure text-white shadow-sm'
                        : 'bg-black/[0.03] dark:bg-white/[0.05] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.06] dark:hover:bg-white/10'
                    }`}
                  >
                    {skillGroup.category}
                  </button>
                ))}
              </div>

              {/* Animated Skill Items (JetBrains Mono) */}
              <div className="pt-4 flex flex-wrap gap-2 min-h-[90px] font-mono">
                {PORTFOLIO_CONFIG.skills
                  .find((s) => s.category === activeCategory)
                  ?.items.map((item, idx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      className="inline-flex items-center gap-1.5 text-xs rounded-lg bg-black/[0.03] dark:bg-white/[0.06] border border-[var(--border-subtle)] px-3 py-1.5 text-[var(--text-primary)] font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-apple-azure" />
                      {item}
                    </motion.span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
