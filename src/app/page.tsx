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
import { SoundProvider } from '@/components/SoundEffects';

export default function HomePage() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <SoundProvider>
      <SmoothScroll>
        <div className="relative min-h-screen bg-[#070709] text-white selection:bg-apple-azure selection:text-white">
          {/* Intro Loading Sequence */}
          {!preloaderComplete && (
            <Preloader onComplete={() => setPreloaderComplete(true)} />
          )}

          {/* Interactive Custom Cursor */}
          <CustomCursor />

          {/* Floating Apple Navigation */}
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
    </SoundProvider>
  );
}

