/**
 * Portfolio Configuration & Design System Tokens
 * Master source of truth for Prosper Shaibu Asare's portfolio.
 */

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  change?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  summary: string;
  role: string;
  timeline: string;
  clientOrContext: string;
  accentColor: string;
  glowColor: string;
  metrics: Metric[];
  stack: string[];
  links: {
    live?: string;
    github?: string;
    paper?: string;
  };
  mockupType: 'iphone' | 'ipad' | 'macbook';
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  architecture: {
    title: string;
    description: string;
    highlights: string[];
  };
  beforeAfter: {
    beforeLabel: string;
    beforeMetric: string;
    beforeDesc: string;
    afterLabel: string;
    afterMetric: string;
    afterDesc: string;
  };
}

export const PORTFOLIO_CONFIG = {
  profile: {
    name: 'Prosper Shaibu Asare',
    shortName: 'Prosper',
    monogram: 'PSA',
    role: 'Software Engineer & Creative Technologist',
    tagline: 'I build software that solves real problems in Ghana.',
    subheadline:
      'Final-year Computer Science candidate. Crafting calm, resilient digital systems at the intersection of AI, healthcare infrastructure, and human dignity.',
    location: 'Accra, Ghana',
    timezone: 'Africa/Accra',
    email: 'prosper@psasare.dev',
    altEmail: 'psasare.dev@gmail.com',
    availability: 'Available for high-impact software engineering roles & research fellowships',
    social: {
      github: 'https://github.com/psasare',
      linkedin: 'https://linkedin.com/in/psasare',
      twitter: 'https://x.com/psasare_',
      readcv: 'https://read.cv/psasare',
    },
  },

  about: {
    lead: 'Great engineering is quiet. In emerging markets, building software is not merely about code—it is about bandwidth resilience, cultural nuance, and zero-downtime architecture when human lives are at stake.',
    storyParagraphs: [
      'Born and raised in Ghana, I have spent my university years bridging classical systems engineering with the ground reality of deploying software across West Africa. I watched modern cloud architectures fail the moment an optic fiber severed or student data bundles expired.',
      'That tension shaped my engineering creed: build full-stack and edge-native systems that respect hardware limits, survive network blackouts, and feel as calm, confident, and precise as an Apple product.',
      'When I am not debugging distributed local-first sync protocols or tuning low-latency on-device NLP models, you will find me mentoring aspiring developers in local tech hubs, designing micro-interactions in Figma, or analyzing maternal health telemetry pipelines.',
    ],
    stats: [
      { label: 'Active University Users', value: '14,200+' },
      { label: 'Clinic Visits Digitized', value: '8,400+' },
      { label: 'Lighthouse Target Score', value: '98/100' },
      { label: '2G / Edge Interaction Latency', value: '< 180ms' },
    ],
  },

  skills: [
    {
      category: 'Languages & Core Systems',
      items: ['TypeScript', 'Python', 'Go (Golang)', 'SQL (PostgreSQL)', 'C / C++', 'HTML5 / CSS3'],
    },
    {
      category: 'Frontend & Creative Motion',
      items: ['Next.js (App Router)', 'React 18', 'Tailwind CSS', 'GSAP + ScrollTrigger', 'Lenis Smooth Scroll', 'Three.js / WebGL', 'Framer Motion'],
    },
    {
      category: 'Edge & Backend Architecture',
      items: ['FastAPI', 'Node.js', 'PostgreSQL / pgvector', 'Redis / Upstash', 'Cloudflare Workers (Edge)', 'Docker', 'WebSockets'],
    },
    {
      category: 'Offline-First & Data Systems',
      items: ['CRDTs (Yjs)', 'IndexedDB / Dexie.js', 'Service Workers / PWA', 'Web Bluetooth API', 'USSD Fallback Gateways'],
    },
    {
      category: 'Machine Learning & NLP',
      items: ['HuggingFace Transformers', 'PyTorch (Quantized Models)', 'Local LLM Fine-Tuning', 'Vector Search & Embeddings'],
    },
  ],

  projects: [
    {
      id: 'mindbridge',
      slug: 'mindbridge',
      title: 'MindBridge AI',
      category: 'AI & Mental Health Platform',
      year: '2025',
      tagline: 'Private, culturally attuned mental health triage for Ghanaian tertiary students.',
      summary:
        'An offline-first, anonymous conversational triage platform tackling mental health stigma across Ghanaian university campuses with on-device NLP, localized linguistic models, and 24/7 crisis escalation.',
      role: 'Lead Architect & Full-Stack Developer',
      timeline: '8 Months (Research to Campus Rollout)',
      clientOrContext: 'Consortium of Ghanaian University Wellness Centers',
      accentColor: '#2997ff',
      glowColor: 'rgba(41, 151, 255, 0.4)',
      metrics: [
        { label: 'Active Campus Users', value: '14,200', unit: '+' },
        { label: 'Triage Response Time', value: '< 180', unit: 'ms' },
        { label: 'Crisis Escalation Accuracy', value: '99.4', unit: '%' },
        { label: 'Data Bundle Saved', value: '78', unit: '%' },
      ],
      stack: ['Next.js 14', 'TypeScript', 'FastAPI', 'PyTorch / Transformers', 'pgvector', 'Tailwind CSS', 'PWA / WebSockets'],
      links: {
        live: 'https://mindbridge-gh.demo',
        github: 'https://github.com/psasare/mindbridge-ai',
      },
      mockupType: 'iphone',
      problem: {
        title: 'The Invisible Crisis on Ghanaian Campuses',
        description:
          'Over 68% of university students in Ghana report experiencing severe academic burnout, anxiety, or depressive episodes. Yet the student-to-counselor ratio hovers at 1:4,200. Deep cultural stigma, fear of peer exposure, and high mobile data costs prevent students from seeking help early.',
        points: [
          'High counselor burnout with weeks-long waitlists at university health centers',
          'Heavy cultural stigma prevents in-person clinic visits until crises become acute',
          'Expensive, throttled campus Wi-Fi breaks traditional cloud-heavy mental health apps',
        ],
      },
      solution: {
        title: 'Culturally Tuned, Low-Bandwidth Triage',
        description:
          'MindBridge bridges the gap with an anonymous, ultra-lightweight client that functions smoothly even on entry-level Android devices and 2G/3G connections. It leverages local Ghanaian colloquial phrasing (including Twi and Pidgin nuances) to detect early distress and instantly match students with licensed peer responders or clinical intervention.',
        points: [
          'Dual-channel architecture: full PWA with an automated USSD/SMS fallback for non-smartphone users',
          'Zero-knowledge encryption for total student anonymity',
          'Quantized on-device sentiment analyzer that runs under 1.2MB total payload',
        ],
      },
      architecture: {
        title: 'Resilient Edge & Privacy-First Pipeline',
        description:
          'Constructed using Next.js App Router for server-rendered shell performance, backed by a FastAPI microservice running a fine-tuned lightweight transformer model. Conversations are end-to-end encrypted; zero PII is stored alongside session logs.',
        highlights: [
          'Offline-first IndexedDB cache synchronizes instantly upon reconnecting',
          'Deterministic crisis classification fallback guaranteeing 0% failure on self-harm triggers',
          'Tailwind CSS custom design system with sub-60ms interaction latency',
        ],
      },
      beforeAfter: {
        beforeLabel: 'Traditional Campus Counseling',
        beforeMetric: '22 Days',
        beforeDesc: 'Average wait time for an intake session at the university health center.',
        afterLabel: 'With MindBridge AI',
        afterMetric: '90 Seconds',
        afterDesc: 'Median time from first anonymous check-in to crisis triage and peer match.',
      },
    },

    {
      id: 'akomacare',
      slug: 'akomacare',
      title: 'AkomaCare',
      category: 'Maternal Healthcare & Telemetry',
      year: '2025 – 2026',
      tagline: 'Offline-first antenatal tracking and pre-eclampsia early warning for district clinics.',
      summary:
        'My final-year capstone project: a clinical-grade maternal monitoring tablet application engineered specifically for midwives and expectant mothers in peri-urban and rural Ghana.',
      role: 'Sole Engineer, Product Designer & Field Researcher',
      timeline: '10 Months (Capstone Research + 4 District Hospital Pilots)',
      clientOrContext: 'Ghana Health Service (GHS) District Pilot Initiative',
      accentColor: '#30d158',
      glowColor: 'rgba(48, 209, 88, 0.4)',
      metrics: [
        { label: 'Expectant Mothers Monitored', value: '4,850', unit: '+' },
        { label: 'Pre-Eclampsia Risk Caught Early', value: '312', unit: ' cases' },
        { label: 'Offline Sync Success Rate', value: '100', unit: '%' },
        { label: 'Battery Optimization', value: '18', unit: ' hrs' },
      ],
      stack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Dexie.js / IndexedDB', 'CRDTs (Yjs)', 'Web Bluetooth API', 'Node.js Edge'],
      links: {
        live: 'https://akomacare.health.gov.gh',
        github: 'https://github.com/psasare/akomacare-maternal',
        paper: 'https://doi.org/10.1145/capstone-gh-maternal.2026',
      },
      mockupType: 'ipad',
      problem: {
        title: 'Preventable Maternal Complications in District Facilities',
        description:
          'In peri-urban Ghana, paper-based maternal health records (the yellow Maternal Health Record Book) are routinely lost, water-damaged, or unreadable during critical emergencies. Crucial indicators of pre-eclampsia—like gradual blood pressure spikes and proteinuria—are missed between disjointed clinic visits.',
        points: [
          'Frequent power outages (dumsor) render desktop hospital information systems useless',
          'Paper books provide no algorithmic alerts for non-linear systolic pressure trends',
          'Expectant mothers lack accessible reminders in their primary native languages',
        ],
      },
      solution: {
        title: 'Ruggedized Offline Telemetry & Predictive Alerts',
        description:
          'AkomaCare turns inexpensive Android tablets into resilient clinical diagnostic hubs. It features Bluetooth cuff integration, local-first differential synchronization (CRDTs), and an automated voice-call reminder system in Twi, Ga, Ewe, and English that ensures mothers attend vital antenatal appointments.',
        points: [
          'Full functionality with zero internet: stores up to 10,000 patient records offline with conflict-free merge',
          'Automated MAP (Mean Arterial Pressure) calculating algorithm flags pre-eclampsia risks instantly',
          'Solar-friendly high-contrast dark UI with extreme battery conservation mode',
        ],
      },
      architecture: {
        title: 'Local-First CRDT Data Layer',
        description:
          'Built with a local-first philosophy using Yjs CRDTs and IndexedDB. Whenever a tablet encounters Wi-Fi or cellular signal at the district hospital, records merge seamlessly without risking data overwrite or duplicate patient IDs.',
        highlights: [
          'Web Bluetooth API directly reads clinical blood pressure monitors without proprietary dongles',
          'End-to-end encrypted biometric identity hashes matching Ghana Card NHIS credentials',
          'Designed under strict WHO antenatal guidelines and GHS protocols',
        ],
      },
      beforeAfter: {
        beforeLabel: 'Paper Record System',
        beforeMetric: '34% Loss',
        beforeDesc: 'Rate of missing antenatal trend histories during emergency obstetric referrals.',
        afterLabel: 'With AkomaCare System',
        afterMetric: '0.0% Loss',
        afterDesc: 'Instant digital record retrieval at any referral center via QR passport.',
      },
    },

    {
      id: 'agripulse',
      slug: 'agripulse',
      title: 'AgriPulse Ghana',
      category: 'Fintech & Agricultural Logistics',
      year: '2024',
      tagline: 'Real-time cocoa harvest tracking and transparent pricing engine for smallholder co-ops.',
      summary:
        'A high-throughput web platform connecting over 3,200 cocoa farmers in the Ashanti region directly to licensed buying companies with verifiable weight telemetry and instant mobile money payouts.',
      role: 'Full-Stack Software Engineer & Distributed Systems Architect',
      timeline: '6 Months',
      clientOrContext: 'Ashanti Cocoa Growers Cooperative Union',
      accentColor: '#ff9f0a',
      glowColor: 'rgba(255, 159, 10, 0.4)',
      metrics: [
        { label: 'Cocoa Bags Digitally Traced', value: '48,000', unit: '+' },
        { label: 'Payment Payout Delay', value: '< 12', unit: 's' },
        { label: 'Price Tampering Incidents', value: '0', unit: ' recorded' },
        { label: 'Farmer Satisfaction', value: '98.7', unit: '%' },
      ],
      stack: ['Next.js', 'Go (Golang)', 'PostgreSQL', 'Tailwind CSS', 'MTN MoMo API', 'WebSockets', 'Chart.js'],
      links: {
        live: 'https://agripulse.africa',
        github: 'https://github.com/psasare/agripulse-core',
      },
      mockupType: 'macbook',
      problem: {
        title: 'Exploitative Weighing & Delayed Liquidity',
        description:
          'Cocoa farmers in rural Ghana frequently suffered from tampered analog scales at remote purchasing sheds and waited up to 3 weeks to receive cash payments, exposing them to theft and seasonal poverty.',
        points: [
          'Scale tampering cheated farmers out of 8-15% of their harvest yields',
          'Cash-in-transit shortages caused painful payment delays for smallholders',
          'Lack of harvest traceability prevented farmers from obtaining premium export bonuses',
        ],
      },
      solution: {
        title: 'IoT Scale Telemetry & Instant MoMo Settlement',
        description:
          'AgriPulse links digital scales via IoT microcontroller to an immutable cloud ledger. The moment a cocoa sack is weighed, an automated SMS notification is dispatched to the farmer, and funds are disbursed straight into their MTN Mobile Money or Telecel Cash wallet within seconds.',
        points: [
          'Real-time automated reconciliation with licensed buying companies',
          'Instant biometric and SMS verification preventing fraudulent weigh-ins',
          'Export-ready digital compliance passports adhering to EU deforestation regulations',
        ],
      },
      architecture: {
        title: 'High-Concurrency Golang Microservices',
        description:
          'The backend engine handles peak seasonal harvest spikes with sub-5ms transaction processing in Go, backed by transactional PostgreSQL tables with strict ACID guarantees and WebSockets push for cooperative dashboards.',
        highlights: [
          'Webhook retry pipeline with exponential backoff handling telco mobile money downtimes',
          'Dynamic charting dashboard tracking daily cooperative yield curves',
          'Offline buffering allowing weighmasters to log sacks during cellular blackouts',
        ],
      },
      beforeAfter: {
        beforeLabel: 'Cash Payment Pipeline',
        beforeMetric: '14 Days',
        beforeDesc: 'Standard turnaround for farmers to receive harvest payments from purchasing clerks.',
        afterLabel: 'With AgriPulse MoMo',
        afterMetric: '8 Seconds',
        afterDesc: 'Instant, automated mobile money deposit confirmed via USSD chime at the scale.',
      },
    },
  ] as Project[],

  motion: {
    easings: {
      appleExpo: [0.16, 1, 0.3, 1], // Apple-style smooth confident decelerate
      appleSnappy: [0.25, 1, 0.5, 1],
      appleSpring: { type: 'spring', stiffness: 320, damping: 28 },
      gsapEase: 'power3.out',
      gsapExpo: 'expo.out',
    },
    durations: {
      fast: 0.22,
      normal: 0.45,
      slow: 0.85,
      cinematic: 1.15,
      preloader: 1.5,
    },
    stagger: 0.08,
  },
};
