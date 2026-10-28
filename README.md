# Kwame Asare — Apple-Inspired Motion Portfolio

A cinematic, award-caliber personal portfolio website engineered with an Apple product page aesthetic: calm confidence, surgical restraint, fluid typography, and 60fps scroll-driven motion storytelling.

Built for a final-year Computer Science candidate showcasing high-impact engineering projects across Ghana and emerging markets (AI mental health, maternal healthcare telemetry, agricultural logistics).

---

## 🌟 Tech Stack & Motion Engine

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/) + TypeScript + React 18
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with fluid `clamp()` type tokens and Apple dark-mode color palette
- **Scroll Orchestration**: [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Inertial Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) synchronized with GSAP ticker
- **Transitions & Gestures**: [Framer Motion](https://www.framer.com/motion/)
- **3D Canvas Hero**: [Three.js](https://threejs.org/) (subtle interactive glass ring & particle field with cursor damping, automatically paused when offscreen for 60fps efficiency)
- **Haptic Feedback**: Web Audio API synthesized tactile Apple clicks (0 external audio assets, zero latency)

---

## 📐 Design & Motion Language

1. **Preloader Sequence (< 1.6s)**:
   - Precision numerical counter (000% → 100%)
   - Masked name reveal sliding up from overflow-hidden container
   - Vertical curtain slide-up reveal into the hero

2. **Cinematic Hero**:
   - Fluid typography (`clamp(2.75rem, 8vw, 7.5rem)`) with tight negative tracking (`-0.04em`)
   - Reactive 3D interactive glass torus with mouse tracking and particle swarm
   - Real-time Accra local time pill (`GMT`), status pill, and Apple scroll cue

3. **Word-by-Word Scroll Creed**:
   - Pinned/scrubbed text reveal where each word transitions from 16% dim opacity to 100% luminous white with subtle cyan bloom

4. **Full-Screen Project Chapters**:
   - Inset card to full-bleed stage scaling via GSAP ScrollTrigger
   - High-fidelity interactive device mockups:
     - **iPhone 16 Pro**: Dynamic island, real-time vernacular mental health triage screen (*MindBridge AI*)
     - **iPad Pro**: Offline-first maternal telemetry dashboard with gestational trend bars (*AkomaCare*)
     - **MacBook Pro**: Digital cocoa scale IoT intake ledger and instant Mobile Money settlement (*AgriPulse*)
   - Real-time animated metric counters (e.g., `14,200+`, `< 180ms`, `99.4%`)

5. **Deep Dive Case Studies (`/projects/[slug]`)**:
   - Pre-rendered static pages (SSG) for instant navigation
   - Sticky metadata specification sidebar (Role, Stack, Context, Live Links)
   - Interactive Before/After comparison slider (drag to inspect legacy bottleneck vs new digital architecture)
   - Systems architecture breakdown and next project footer navigation

6. **Interactive System Specs Bento Grid**:
   - Live **2G vs 5G bandwidth simulator**: toggle between 2G EDGE (56 kbps) and 5G to inspect payload sizes and fail-safe USSD survivability

---

## 📁 Project Structure

```text
Psasare-Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css              # Apple dark theme, fluid clamp utils, noise texture
│   │   ├── layout.tsx               # Root layout, OpenGraph SEO, metadata, skip-to-content
│   │   ├── page.tsx                 # Main landing experience
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx         # SSG Case study route (generateStaticParams)
│   ├── components/
│   │   ├── AboutSection.tsx         # Story, education, interactive skills matrix
│   │   ├── BeforeAfterSlider.tsx    # Interactive comparison slider
│   │   ├── CapabilitiesGrid.tsx     # Bento grid with 2G/5G latency toggle
│   │   ├── CaseStudyView.tsx        # Client case study narrative & device presentation
│   │   ├── ContactSection.tsx       # Huge magnetic email, clipboard copy, footer
│   │   ├── CustomCursor.tsx         # Lerping cursor with "VIEW" contextual badge
│   │   ├── DeviceMockup.tsx         # iPhone 16 Pro, iPad Pro, MacBook Pro CSS frames
│   │   ├── Hero.tsx                 # Hero section with masked headline reveals
│   │   ├── HeroCanvas.tsx           # Lightweight 60fps Three.js glass ring
│   │   ├── IntroStatement.tsx       # Pinned word-by-word scroll illumination
│   │   ├── MagneticButton.tsx       # Spring-physics magnetic hover button
│   │   ├── Navigation.tsx           # Floating pill nav, Accra clock, sound toggle
│   │   ├── Preloader.tsx            # Elegant 1.5s intro curtain
│   │   ├── ProjectCard.tsx          # Full-screen project card with metric counter HUD
│   │   ├── ProjectsSection.tsx      # Projects section wrapper
│   │   ├── SmoothScroll.tsx         # Lenis provider synced with GSAP
│   │   └── SoundEffects.tsx         # Web Audio API haptic click synthesizer
│   └── config/
│       └── portfolio.ts             # 💡 Centralized content, projects & motion settings
├── tailwind.config.ts               # Color tokens, easings, shadows
├── next.config.js                   # Next.js optimization configuration
└── tsconfig.json                    # Strict TypeScript configuration
```

---

## 🛠️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Installation
Navigate into the project directory and install dependencies:
```bash
cd Psasare-Portfolio
npm install
```

### 3. Local Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Production Build & Static Generation
To verify the production build and generate static HTML pages:
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content & Animation Settings

All profile data, projects, metrics, and animation settings are isolated in a single config file:
👉 **`src/config/portfolio.ts`**

### To Change Personal Info:
Open `src/config/portfolio.ts` and modify the `profile` object:
```ts
profile: {
  name: 'Your Name',
  role: 'Software Engineer & Creative Technologist',
  tagline: 'I engineer software that solves real problems in Ghana.',
  email: 'your.email@example.com',
  location: 'Accra, Ghana',
  availability: 'Available for full-time engineering roles · Class of 2026',
  social: {
    github: 'https://github.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourhandle',
    twitter: 'https://x.com/yourhandle',
  },
}
```

### To Add or Edit Projects:
In `PORTFOLIO_CONFIG.projects`, update or add project items. Each project automatically populates:
1. The full-screen scroll chapter on the homepage
2. The dynamic route at `/projects/[slug]`
3. The interactive before/after metric slider
4. The device mockup (choose `'iphone' | 'ipad' | 'macbook'`)

### To Adjust Motion Curves & Easings:
In `PORTFOLIO_CONFIG.motion`:
```ts
motion: {
  easings: {
    appleExpo: [0.16, 1, 0.3, 1], // Apple-style smooth decelerate
    gsapEase: 'power3.out',
  },
  durations: {
    normal: 0.5,
    slow: 0.85,
  },
}
```

---

## 🚀 How to Deploy to Vercel

### Option 1: Via GitHub (Recommended)
1. Initialize a git repository in the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Apple-inspired motion portfolio"
   ```
2. Create a new repository on your GitHub account (e.g. `Psasare-Portfolio`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/your-username/Psasare-Portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
5. Import your `Psasare-Portfolio` repository.
6. Vercel automatically detects Next.js. Click **"Deploy"**.
7. In under 60 seconds, your site is live worldwide on Vercel's global edge network!

### Option 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to deploy directly from your terminal.
