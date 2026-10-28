'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, WifiOff, ShieldCheck, Zap, Database, Smartphone, ArrowRight } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  const [networkMode, setNetworkMode] = useState<'2g' | '5g'>('2g');

  return (
    <section id="capabilities" className="relative w-full bg-[#09090d] py-28 px-6 md:px-14 lg:px-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-apple-glow mb-4">
            <Cpu size={14} className="text-apple-azure" />
            <span>ARCHITECTURAL PHILOSOPHY &amp; SYSTEM SPECS</span>
          </div>
          <h2 className="fluid-section-title font-bold tracking-tight text-white">
            Engineered for hostile network conditions.
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/50 leading-relaxed">
            Building software in emerging markets requires rethinking cloud assumptions. Every application I design prioritizes zero-data survivability, local-first data integrity, and extreme UI responsiveness.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1: Interactive Network Latency Simulator */}
          <div className="md:col-span-2 rounded-3xl glass-panel p-8 md:p-10 flex flex-col justify-between border-white/10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-apple-glow">
                  LIVE ARCHITECTURE SIMULATOR
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Bandwidth Resilience Engine</h3>
              </div>

              {/* Toggle 2G vs 5G */}
              <div className="flex rounded-full bg-black/60 p-1 border border-white/10 self-start">
                <button
                  onClick={() => setNetworkMode('2g')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    networkMode === '2g'
                      ? 'bg-apple-azure text-white shadow-md'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <WifiOff size={13} />
                  2G / EDGE (56 kbps)
                </button>
                <button
                  onClick={() => setNetworkMode('5g')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    networkMode === '5g'
                      ? 'bg-apple-azure text-white shadow-md'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Wifi size={13} />
                  5G Broadband
                </button>
              </div>
            </div>

            {/* Simulation Comparison Readout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div>
                <span className="text-xs text-white/40 font-mono block">INITIAL PAYLOAD SIZE</span>
                <span className="text-xl md:text-2xl font-bold font-mono text-white mt-1 block">
                  {networkMode === '2g' ? '48 KB' : '2.4 MB'}
                </span>
                <span className="text-[10px] text-apple-emerald font-mono">
                  {networkMode === '2g' ? 'Zero external font CDNs' : 'Standard bundle'}
                </span>
              </div>

              <div>
                <span className="text-xs text-white/40 font-mono block">FIRST CONTENTFUL PAINT</span>
                <span className="text-xl md:text-2xl font-bold font-mono text-apple-glow mt-1 block">
                  {networkMode === '2g' ? '320 ms' : '90 ms'}
                </span>
                <span className="text-[10px] text-white/50 font-mono">Instant edge hydration</span>
              </div>

              <div>
                <span className="text-xs text-white/40 font-mono block">FAIL-SAFE MECHANISM</span>
                <span className="text-xl md:text-2xl font-bold font-mono text-apple-emerald mt-1 block">
                  {networkMode === '2g' ? 'USSD / SMS' : 'WebSocket / SSL'}
                </span>
                <span className="text-[10px] text-white/50 font-mono">Continuous session survival</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-white/60 leading-relaxed mt-2">
              By pruning runtime bloat, pre-compiling critical routes, and utilizing IndexedDB delta stores, my apps remain 100% interactive even when internet connectivity drops entirely.
            </p>
          </div>

          {/* Bento Item 2: Local-First CRDTs */}
          <div className="rounded-3xl glass-panel p-8 flex flex-col justify-between border-white/10">
            <div>
              <div className="h-10 w-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-apple-azure mb-5">
                <Database size={20} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-apple-emerald">
                DATA INTEGRITY
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Local-First CRDT Sync</h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed mt-3">
                No user action is ever blocked waiting for a server roundtrip. State changes apply immediately to the local device database and resolve conflict-free across intermittent hospital and campus networks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/40 font-mono">
              <span>ZERO DATA LOSS</span>
              <span className="text-apple-emerald">Yjs / Dexie</span>
            </div>
          </div>

          {/* Bento Item 3: On-Device & Edge AI */}
          <div className="rounded-3xl glass-panel p-8 flex flex-col justify-between border-white/10">
            <div>
              <div className="h-10 w-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-apple-glow mb-5">
                <Zap size={20} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-apple-glow">
                EDGE INTELLIGENCE
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Quantized Edge AI</h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed mt-3">
                Fine-tuned 4-bit quantized NLP transformers running on low-resource edge servers and mobile clients. Zero student identity or medical PII leaves the client unencrypted.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/40 font-mono">
              <span>LATENCY &lt; 180MS</span>
              <span className="text-apple-glow">PyTorch / ONNX</span>
            </div>
          </div>

          {/* Bento Item 4: Accessible & Kinetic Motion */}
          <div className="md:col-span-2 rounded-3xl glass-panel p-8 md:p-10 flex flex-col justify-between border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white mb-5">
                  <Smartphone size={20} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                  DESIGN SYSTEM
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Calm, Confident Interfaces</h3>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed mt-3">
                  Restraint over decoration. High contrast typography, generous negative space, and butter-smooth 60fps micro-interactions that communicate state clearly to doctors, farmers, and students alike.
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-2xl bg-black/40 p-5 border border-white/[0.06]">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/50">WCAG 2.2 AAA Contrast</span>
                    <span className="text-apple-emerald font-mono">100% Compliant</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/50">Prefers-Reduced-Motion</span>
                    <span className="text-apple-emerald font-mono">Supported</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/50">Native Touch Feedback</span>
                    <span className="text-apple-emerald font-mono">Web Audio Haptics</span>
                  </div>
                </div>
                <span className="text-[10px] text-white/30 font-mono mt-4 pt-3 border-t border-white/10">
                  TESTED ACROSS LOW-COST TRANSSION &amp; SAMSUNG DEVICES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

