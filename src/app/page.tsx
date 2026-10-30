'use client';

import React, { useState } from 'react';
import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { IntroStatement } from '@/components/IntroStatement';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function HomePage() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-300">
        {/* Intro Loading Sequence */}
        {!preloaderComplete && (
          <Preloader onComplete={() => setPreloaderComplete(true)} />
        )}

        {/* Interactive Custom Cursor */}
        <CustomCursor />

        {/* Floating Apple Navigation with Theme Switcher */}
        <Navigation />

        {/* Main Portfolio Structure */}
        <main id="main-content">
          <Hero />
          <IntroStatement />
          <ProjectsSection />
          <CapabilitiesGrid />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
}
