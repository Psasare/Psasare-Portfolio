'use client';

import React, { useState } from 'react';
import { Project } from '@/config/portfolio';
import { ShieldCheck, WifiOff, Activity, CheckCircle2, TrendingUp, Zap, Sparkles, AlertTriangle } from 'lucide-react';

interface DeviceMockupProps {
  project: Project;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ project }) => {
  if (project.mockupType === 'iphone') {
    return <IPhoneMockup project={project} />;
  }

  if (project.mockupType === 'ipad') {
    return <IPadMockup project={project} />;
  }

  return <MacBookMockup project={project} />;
};

/* -------------------------------------------------------------
 * 1. IPhone 16 Pro Frame (MindBridge AI)
 * ------------------------------------------------------------- */
const IPhoneMockup: React.FC<{ project: Project }> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'triage'>('chat');

  return (
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[370px] select-none">
      {/* Outer Titanium Bezel */}
      <div className="relative rounded-[50px] p-[10px] bg-gradient-to-b from-[#3a3a42] via-[#242429] to-[#121215] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.12)]">
        {/* Dynamic Island Screen Border */}
        <div className="relative rounded-[42px] overflow-hidden bg-[#09090d] border border-black/80 aspect-[9/19.5] flex flex-col justify-between text-white">
          {/* Top Dynamic Island Bar */}
          <div className="pt-3 px-6 flex items-center justify-between z-20">
            <span className="text-[12px] font-semibold text-white/80">9:41</span>
            {/* Dynamic Island pill */}
            <div className="h-6 w-24 bg-black rounded-full flex items-center justify-between px-2 border border-white/10 shadow-inner">
              <span className="h-2 w-2 rounded-full bg-apple-azure animate-pulse" />
              <span className="text-[9px] font-mono text-apple-glow tracking-tighter">AI READY</span>
              <span className="h-2 w-2 rounded-full bg-black border border-white/30" />
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-white/80">
              <span className="text-[9px] px-1 rounded bg-white/10 font-mono text-apple-emerald">2G SAFE</span>
              <div className="h-2 w-4 rounded-sm border border-white/60 p-[1px]">
                <div className="h-full w-3 bg-white rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 pt-3 pb-2 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-apple-azure to-cyan-400 flex items-center justify-center font-bold text-xs shadow-md">
                M
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white flex items-center gap-1">
                  MindBridge AI <ShieldCheck size={12} className="text-apple-azure" />
                </h4>
                <p className="text-[10px] text-white/50">Anonymous Campus Session #GH-904</p>
              </div>
            </div>
            <span className="text-[10px] rounded-full bg-white/10 px-2 py-0.5 font-mono text-white/70">
              Encrypted
            </span>
          </div>

          {/* Screen Body Content: Simulated Real Triage */}
          <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-3">
              {/* System Note */}
              <div className="rounded-xl bg-white/[0.04] p-2.5 border border-white/[0.06] text-[11px] text-white/60 flex items-start gap-2">
                <Sparkles size={14} className="text-apple-glow shrink-0 mt-0.5" />
                <span>
                  Culturally attuned counselor model active. Responding in English &amp; Ghanaian vernacular.
                </span>
              </div>

              {/* Student Message */}
              <div className="self-end max-w-[85%] rounded-2xl rounded-tr-xs bg-apple-azure p-3 text-[12px] text-white leading-snug shadow-sm">
                I have final-year exams next week and the pressure is getting too much. I can’t sleep and my heart keeps racing.
              </div>

              {/* AI Triage Reply */}
              <div className="self-start max-w-[90%] rounded-2xl rounded-tl-xs bg-[#181822] border border-white/10 p-3 text-[12px] text-white/90 leading-snug">
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-white/[0.06]">
                  <span className="text-[10px] text-apple-glow font-mono">ASSESSMENT: ACUTE EXAM STRESS</span>
                  <span className="text-[9px] text-apple-emerald font-mono">0.02 MB USED</span>
                </div>
                Take a slow breath. What you are experiencing is real, but you do not have to carry it alone. Let us ground yourself right now with a 2-minute rhythm, then connect you with our peer counselor on campus.
              </div>

              {/* Quick Action Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] rounded-full bg-white/[0.08] hover:bg-white/15 px-2.5 py-1 text-white/80 border border-white/10">
                  Grounding exercise (4-7-8)
                </span>
                <span className="text-[10px] rounded-full bg-apple-emerald/20 text-apple-emerald px-2.5 py-1 border border-apple-emerald/30">
                  Connect peer listener (Free)
                </span>
              </div>
            </div>

            {/* Bottom Input Field */}
            <div className="pt-2">
              <div className="rounded-full bg-white/10 border border-white/15 px-3 py-2 flex items-center justify-between text-xs text-white/40">
                <span>Type how you feel...</span>
                <span className="h-6 w-6 rounded-full bg-apple-azure flex items-center justify-center text-white text-[10px]">
                  ↑
                </span>
              </div>
              <p className="text-[9px] text-center text-white/30 pt-1.5 font-mono">
                Zero PII saved · Zero data usage on MTN &amp; Telecel
              </p>
            </div>
          </div>

          {/* Bottom Gesture Bar */}
          <div className="pb-2 flex justify-center">
            <div className="h-1 w-28 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 2. IPad Pro Frame (AkomaCare Maternal Telemetry)
 * ------------------------------------------------------------- */
const IPadMockup: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-[620px] select-none">
      {/* Outer Aluminum Bezel */}
      <div className="relative rounded-[28px] p-[10px] bg-gradient-to-b from-[#2a2a30] via-[#1c1c20] to-[#121214] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.12)]">
        {/* Screen */}
        <div className="relative rounded-[20px] overflow-hidden bg-[#0a0a0f] border border-black/80 aspect-[4/3] flex flex-col justify-between text-white p-5">
          {/* Tablet Top App Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-apple-emerald to-teal-400 flex items-center justify-center font-bold text-black shadow-md">
                AC
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  AkomaCare Antenatal Telemetry
                  <span className="text-[10px] bg-apple-emerald/20 text-apple-emerald px-2 py-0.5 rounded-full font-mono">
                    GHS District Hub
                  </span>
                </h4>
                <p className="text-[11px] text-white/50">Patient: Adwoa Mensah (Week 34) · ID #GHS-VR-8821</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-apple-emerald/10 border border-apple-emerald/30 px-3 py-1 text-xs text-apple-emerald font-mono">
                <WifiOff size={12} />
                <span>OFFLINE LOCAL-FIRST</span>
              </div>
              <span className="text-xs text-white/60 font-mono">10:24 AM</span>
            </div>
          </div>

          {/* Vitals Telemetry Grid */}
          <div className="grid grid-cols-3 gap-3 my-3">
            <div className="rounded-xl bg-white/[0.04] p-3 border border-white/[0.08]">
              <span className="text-[11px] font-mono text-white/50 uppercase">Blood Pressure</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">138 / 88</span>
                <span className="text-[10px] text-white/40">mmHg</span>
              </div>
              <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-amber-400">
                <AlertTriangle size={10} /> Elevated MAP (+4%)
              </span>
            </div>

            <div className="rounded-xl bg-white/[0.04] p-3 border border-white/[0.08]">
              <span className="text-[11px] font-mono text-white/50 uppercase">Fetal Heart Rate</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-apple-emerald">142</span>
                <span className="text-[10px] text-white/40">bpm</span>
              </div>
              <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-apple-emerald">
                <CheckCircle2 size={10} /> Normal Range (120-160)
              </span>
            </div>

            <div className="rounded-xl bg-white/[0.04] p-3 border border-white/[0.08]">
              <span className="text-[11px] font-mono text-white/50 uppercase">Pre-Eclampsia Risk</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-amber-400">Moderate</span>
              </div>
              <span className="mt-1 block text-[10px] text-white/50">Early clinical intervention logged</span>
            </div>
          </div>

          {/* Interactive Chart / Telemetry Graph */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white/80">Gestational Trend (Weeks 20 - 34)</span>
              <span className="text-[10px] font-mono text-apple-glow">CRDT SYNC READY (Yjs)</span>
            </div>
            {/* Visual Telemetry Bars */}
            <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
              {[45, 48, 52, 50, 54, 58, 62, 60, 66, 72, 70, 78, 85, 88].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    style={{ height: `${val}%` }}
                    className={`w-full rounded-t-sm ${
                      val > 80 ? 'bg-amber-400' : 'bg-apple-emerald/70'
                    }`}
                  />
                  <span className="text-[8px] font-mono text-white/30">W{20 + idx}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-3 flex items-center justify-between border-t border-white/10 text-xs">
            <span className="text-white/40 font-mono text-[11px]">
              Last Bluetooth Sync: 2m ago · Cuff #BT-889
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs transition-colors">
                Print QR Passport
              </button>
              <button className="px-3 py-1 rounded bg-apple-emerald hover:bg-emerald-400 text-black font-semibold text-xs transition-colors">
                Log Clinical Referral
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 3. MacBook Pro Frame (AgriPulse Ghana)
 * ------------------------------------------------------------- */
const MacBookMockup: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative mx-auto w-full max-w-[580px] lg:max-w-[660px] select-none">
      {/* Laptop Screen Enclosure */}
      <div className="relative rounded-t-[18px] p-[8px] pb-0 bg-gradient-to-b from-[#2e2e34] via-[#1c1c20] to-[#141416] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.12)]">
        {/* Inner Display with Top Camera Notch */}
        <div className="relative rounded-t-[12px] overflow-hidden bg-[#08080c] border border-black aspect-[16/10] flex flex-col justify-between text-white p-4">
          {/* Top Notch bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[11px] font-mono text-white/50 ml-2">
                agripulse.africa/terminal // Ashanti Co-Op #04
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-apple-emerald animate-pulse" />
              <span className="text-[10px] font-mono text-apple-emerald">LIVE TELEMETRY</span>
            </div>
          </div>

          {/* Main Dashboard Screen */}
          <div className="py-2 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  Digital Cocoa Intake Scale #3
                  <span className="text-[10px] rounded bg-amber-500/20 text-amber-400 px-2 py-0.5 font-mono">
                    VERIFIED IoT SENSOR
                  </span>
                </h3>
                <p className="text-[11px] text-white/50">Purchasing Clerk: Kwame Osei · Offinso Shed</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-white/40 block">TODAY&apos;S ACCUMULATED TONNAGE</span>
                <span className="text-xl font-bold font-mono text-white">42.8 Metric Tons</span>
              </div>
            </div>

            {/* Live Sack Transaction Feed */}
            <div className="my-2 rounded-lg bg-white/[0.03] border border-white/[0.06] p-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pb-2 border-b border-white/10">
                <span>FARMER ID</span>
                <span>GROSS WEIGHT</span>
                <span>NET SETTLEMENT</span>
                <span>MOMO STATUS</span>
              </div>
              <div className="mt-2 flex flex-col gap-2 text-xs">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-white font-medium">Kofi Antwi (GH-CO-1029)</span>
                  <span className="text-white/80">64.2 kg (Grade 1)</span>
                  <span className="text-apple-emerald font-semibold">GHS 1,348.20</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-apple-emerald bg-apple-emerald/10 px-2 py-0.5 rounded">
                    <CheckCircle2 size={10} /> SETTLED (8s)
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-white/60">
                  <span>Ama Serwaa (GH-CO-0842)</span>
                  <span>128.4 kg (Grade 1)</span>
                  <span className="text-apple-emerald">GHS 2,696.40</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-apple-emerald bg-apple-emerald/10 px-2 py-0.5 rounded">
                    <CheckCircle2 size={10} /> SETTLED (11s)
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Settlement Status */}
            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-amber-400" />
                <span className="text-[11px] text-white/70">
                  Direct Mobile Money settlement API connection: <strong className="text-white">Active (99.8% SLA)</strong>
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/40">Golang Microservice Latency: 4.2ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Bottom Base & Trackpad */}
      <div className="relative h-3.5 bg-gradient-to-b from-[#222226] to-[#141416] rounded-b-[12px] border-t border-white/15 flex justify-center">
        <div className="w-16 h-1 bg-white/20 rounded-b-md" />
      </div>
    </div>
  );
};

