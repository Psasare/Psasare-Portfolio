'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { GraduationCap, Award, MapPin, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const AboutSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(PORTFOLIO_CONFIG.skills[0].category);

  return (
    <section id="about" className="relative w-full bg-[#070709] py-28 px-6 md:px-14 lg:px-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-apple-glow mb-4">
            <Terminal size={14} className="text-apple-azure" />
            <span>ABOUT // BACKGROUND &amp; SKILLS</span>
          </div>
          <h2 className="fluid-section-title font-bold tracking-tight text-white">
            Driven by curiosity. Grounded by purpose.
          </h2>
        </div>

        {/* Cinematic 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story + Academic Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl md:text-2xl font-medium text-white/90 leading-snug">
                {PORTFOLIO_CONFIG.about.lead}
              </p>

              <div className="mt-6 flex flex-col gap-4 text-base text-white/60 leading-relaxed font-normal">
                {PORTFOLIO_CONFIG.about.storyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Academic Highlights & Accolades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl glass-panel p-5 border-white/10">
                <div className="flex items-center gap-3 mb-2 text-apple-azure">
                  <GraduationCap size={20} />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/50">EDUCATION</span>
                </div>
                <h4 className="text-base font-semibold text-white">BSc Computer Science</h4>
                <p className="text-xs text-white/60 mt-1">Class of 2026 · Accra, Ghana</p>
                <span className="inline-block mt-2 text-[11px] font-mono text-apple-emerald bg-apple-emerald/10 px-2 py-0.5 rounded">
                  First Class Honours Track
                </span>
              </div>

              <div className="rounded-2xl glass-panel p-5 border-white/10">
                <div className="flex items-center gap-3 mb-2 text-apple-glow">
                  <Award size={20} />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/50">RECOGNITION</span>
                </div>
                <h4 className="text-base font-semibold text-white">National Healthtech Hackathon</h4>
                <p className="text-xs text-white/60 mt-1">1st Place Winner (Maternal Telemetry System)</p>
                <span className="inline-block mt-2 text-[11px] font-mono text-apple-glow bg-apple-azure/10 px-2 py-0.5 rounded">
                  Featured in Tech In Africa &apos;25
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card + Interactive Skills Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Portrait / Identity Glass Card */}
            <div className="relative rounded-3xl glass-panel p-6 border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-apple-azure via-blue-600 to-cyan-400 p-[2px] shadow-lg">
                    <div className="h-full w-full rounded-2xl bg-[#09090d] flex items-center justify-center font-bold text-white text-lg">
                      KA
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{PORTFOLIO_CONFIG.profile.name}</h3>
                    <p className="text-xs text-white/50 flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-apple-azure" />
                      {PORTFOLIO_CONFIG.profile.location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-white/40 block">CURRENT STATUS</span>
                  <span className="text-xs font-semibold text-apple-emerald">Available Q1 2026</span>
                </div>
              </div>

              {/* Bio Highlights Stats */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {PORTFOLIO_CONFIG.about.stats.map((stat, i) => (
                  <div key={i} className="rounded-xl bg-white/[0.03] p-3 border border-white/[0.06]">
                    <span className="text-lg font-bold font-mono text-white block">{stat.value}</span>
                    <span className="text-[11px] text-white/50 block mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-white/40 font-mono">
                <span>TERMINAL IDENTITY: VERIFIED</span>
                <span className="text-apple-glow">GH-ENGINEER-2026</span>
              </div>
            </div>

            {/* Interactive Skills Matrix */}
            <div className="rounded-3xl glass-panel p-6 border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-apple-glow flex items-center gap-1.5">
                  <Code2 size={13} /> TECHNICAL ARSENAL
                </span>
                <span className="text-[10px] text-white/40 font-mono">CLICK CATEGORY</span>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-1.5 pb-4 border-b border-white/[0.08]">
                {PORTFOLIO_CONFIG.skills.map((skillGroup) => (
                  <button
                    key={skillGroup.category}
                    onClick={() => setActiveCategory(skillGroup.category)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      activeCategory === skillGroup.category
                        ? 'bg-apple-azure text-white shadow-sm'
                        : 'bg-white/[0.05] text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {skillGroup.category}
                  </button>
                ))}
              </div>

              {/* Animated Skill Items */}
              <div className="pt-4 flex flex-wrap gap-2 min-h-[90px]">
                {PORTFOLIO_CONFIG.skills
                  .find((s) => s.category === activeCategory)
                  ?.items.map((item, idx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono rounded-lg bg-white/[0.06] border border-white/10 px-3 py-1.5 text-white/90"
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

