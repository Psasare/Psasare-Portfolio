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
    location: 'Ho, Ghana',
    timezone: 'Africa/Accra',
    email: 'asareprosper143@gmail.com',
    altEmail: undefined,
    availability: 'Available for high-impact software engineering roles & research fellowships',
    social: {
      github: 'https://github.com/Psasare',
      linkedin: 'https://www.linkedin.com/in/prosper-shaibu-asare-284244339',
      readcv: 'https://read.cv/psasare',
    },
  },

  about: {
    lead: 'Great engineering is quiet. In emerging markets, software engineering transcends code alone: it demands bandwidth resilience, cultural alignment, and zero-downtime reliability when human lives depend on it.',
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
      id: 'bloom',
      slug: 'bloom',
      title: 'Bloom Maternal Health',
      category: 'Maternal Healthcare & Telemetry',
      year: '2025 / 2026',
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
      stack: ['React Native / PWA', 'TypeScript', 'Dexie.js / IndexedDB', 'CRDTs (Yjs)', 'Web Bluetooth API', 'Node.js Edge', 'Tailwind CSS'],
      links: {
        live: 'https://github.com/Psasare/Bloom-Maternal-Health-App',
        github: 'https://github.com/Psasare/Bloom-Maternal-Health-App',
      },
      mockupType: 'ipad',
      problem: {
        title: 'Preventable Maternal Complications in District Facilities',
        description:
          'In peri-urban Ghana, paper-based maternal health records (the yellow Maternal Health Record Book) are routinely lost, water-damaged, or unreadable during critical emergencies. Crucial indicators of pre-eclampsia, including gradual blood pressure spikes and proteinuria, are missed between disjointed clinic visits.',
        points: [
          'Frequent power outages (dumsor) render desktop hospital information systems useless',
          'Paper books provide no algorithmic alerts for non-linear systolic pressure trends',
          'Expectant mothers lack accessible reminders in their primary native languages',
        ],
      },
      solution: {
        title: 'Ruggedized Offline Telemetry & Predictive Alerts',
        description:
          'Bloom turns inexpensive Android tablets into resilient clinical diagnostic hubs. It features Bluetooth cuff integration, local-first differential synchronization (CRDTs), and an automated voice-call reminder system in Twi, Ga, Ewe, and English that ensures mothers attend vital antenatal appointments.',
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
        afterLabel: 'With Bloom System',
        afterMetric: '0.0% Loss',
        afterDesc: 'Instant digital record retrieval at any referral center via QR passport.',
      },
    },

    {
      id: 'mindbridge',
      slug: 'mindbridge',
      title: 'MindBridge: Mental Health Navigator',
      category: 'AI & Mental Health Platform',
      year: '2025',
      tagline: 'Private, culturally attuned mental health triage for Ghanaian tertiary students.',
      summary:
        'An offline-first, anonymous conversational triage platform tackling mental health stigma across Ghanaian university campuses with on-device NLP, localized linguistic models, and 24/7 crisis escalation.',
      role: 'Lead Architect & Mobile Systems Engineer',
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
      stack: ['React Native / PWA', 'TypeScript', 'FastAPI', 'PyTorch / Transformers', 'pgvector', 'Tailwind CSS', 'WebSockets'],
      links: {
        live: 'https://github.com/Psasare/MindBridge-Mental-Health-Navigator-Mobile-App-Project',
        github: 'https://github.com/Psasare/MindBridge-Mental-Health-Navigator-Mobile-App-Project',
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
        afterLabel: 'With MindBridge',
        afterMetric: '90 Seconds',
        afterDesc: 'Median time from first anonymous check-in to crisis triage and peer match.',
      },
    },

    {
      id: 'course-registration',
      slug: 'course-registration',
      title: 'Course Registration System',
      category: 'Academic Systems & High-Concurrency Architecture',
      year: '2024',
      tagline: 'High-concurrency university academic portal handling course enrollment, prerequisite graphs, and schedule matrix validation.',
      summary:
        'An automated university course registration and timetable generation engine designed to eliminate registration crashes during peak enrollment surges. Features ACID prerequisite verification, race-condition-free seat allocations, and automated clash detection.',
      role: 'Full-Stack Systems Engineer & Database Architect',
      timeline: '4 Months',
      clientOrContext: 'University Academic Computing & Registry Portal Project',
      accentColor: '#bf5af2',
      glowColor: 'rgba(191, 90, 242, 0.4)',
      metrics: [
        { label: 'Concurrent Students Handled', value: '6,500', unit: '+' },
        { label: 'Peak Transaction Latency', value: '< 45', unit: 'ms' },
        { label: 'Timetable Clash Rate', value: '0.0', unit: '%' },
        { label: 'Prerequisite Audit Automation', value: '100', unit: '%' },
      ],
      stack: ['Next.js (App Router)', 'TypeScript', 'PostgreSQL', 'Prisma / Redis', 'Tailwind CSS', 'Docker', 'ACID Transactions'],
      links: {
        live: 'https://github.com/Psasare',
        github: 'https://github.com/Psasare',
      },
      mockupType: 'macbook',
      problem: {
        title: 'Registration Server Crashes & Prerequisite Bottlenecks',
        description:
          'During seasonal university course enrollment windows, thousands of students storm the legacy university portal simultaneously. Race conditions caused double-booking of restricted lab slots, server 504 gateway timeouts, and manual prerequisite verification backlogs that delayed the academic semester.',
        points: [
          'Catastrophic portal downtime during the first 2 hours of registration opening',
          'Concurrency race conditions causing over-enrollment beyond classroom physical capacity',
          'Manual student advisor prerequisite audits taking up to 3 weeks into term',
        ],
      },
      solution: {
        title: 'High-Throughput Queueing & Conflict-Free Schedule Generation',
        description:
          'Engineered an atomic, distributed course reservation pipeline utilizing Redis transactional locks and PostgreSQL row-level locks. Built a visual timetable builder that evaluates prerequisite DAGs (Directed Acyclic Graphs) and alerts students to scheduling conflicts in real-time before submission.',
        points: [
          'Atomic course seat reservations with zero double-booking under 5,000+ RPS peak load',
          'Client-side instant schedule conflict detection matrix with zero round-trip latency',
          'Automated academic audit engine verifying prerequisite chains against student transcripts',
        ],
      },
      architecture: {
        title: 'Optimistic Concurrency & DAG Prerequisite Validation',
        description:
          'Constructed with Next.js App Router for server-side cached catalog views, backed by transactional PostgreSQL procedures with Redis queueing for burst absorption. Course prerequisites are mapped as directed graphs to detect cycles and unmet criteria in single-digit milliseconds.',
        highlights: [
          'Redis distributed locks guaranteeing atomic seat reservations during microsecond-level race conditions',
          'Prerequisite validation DAG resolving complex academic pathways across faculties',
          'Sub-50ms API response times under high-concurrency stress benchmarks',
        ],
      },
      beforeAfter: {
        beforeLabel: 'Legacy Registry Portal',
        beforeMetric: '4.5 Hours',
        beforeDesc: 'Average student wait and retry time to successfully enroll during registration morning.',
        afterLabel: 'With Course Registration System',
        afterMetric: '90 Seconds',
        afterDesc: 'Total elapsed time from portal login to validated timetable submission.',
      },
    },

    {
      id: 'library-management',
      slug: 'library-management',
      title: 'Library Management System',
      category: 'Enterprise Information Systems & Inventory Telemetry',
      year: '2024',
      tagline: 'Automated digital cataloging, barcode inventory tracking, and circulation analytics.',
      summary:
        'A modern library information management platform streamlining book cataloging, patron loan lifecycles, reservation queues, and automated overdue penalty calculations across academic and community libraries.',
      role: 'Full-Stack Software Engineer & Database Architect',
      timeline: '3 Months',
      clientOrContext: 'Academic Library & Resource Center Digitization',
      accentColor: '#ff9f0a',
      glowColor: 'rgba(255, 159, 10, 0.4)',
      metrics: [
        { label: 'Cataloged Volumes', value: '18,500', unit: '+' },
        { label: 'Circulation Scan Speed', value: '< 3', unit: 's' },
        { label: 'Overdue Recovery Rate', value: '94.2', unit: '%' },
        { label: 'Catalog Search Latency', value: '< 20', unit: 'ms' },
      ],
      stack: ['TypeScript', 'React', 'Node.js / Express', 'PostgreSQL', 'Tailwind CSS', 'REST API', 'Barcode/QR Engine'],
      links: {
        live: 'https://github.com/Psasare',
        github: 'https://github.com/Psasare',
      },
      mockupType: 'macbook',
      problem: {
        title: 'Paper Ledgers, Lost Inventory & Circulation Friction',
        description:
          'Academic libraries struggled with manual paper check-out sheets and disconnected legacy databases. Missing books went untracked for semesters, student borrow queues caused long lobby lines during exams, and calculating overdue fines manually led to discrepancies and lost revenue.',
        points: [
          'Manual book logging caused 15+ minute queue bottlenecks at checkout desks',
          'Untracked book losses and misplaced volumes accounting for 12% of total inventory',
          'Lack of digital reservation queues for high-demand course reference materials',
        ],
      },
      solution: {
        title: 'Barcode/QR Inventory Tracking & Automated Patron Lifecycle',
        description:
          'Designed a fast, responsive library management suite featuring instant barcode and ISBN scanner integration, indexed full-text search across titles and authors, automated email/SMS due-date reminders, and an interactive patron self-service dashboard.',
        points: [
          'Instant 1-click barcode book checkout and return with real-time stock updating',
          'Fuzzy full-text catalog search indexing thousands of titles in under 20ms',
          'Automated fine calculation and reservation queue notifications',
        ],
      },
      architecture: {
        title: 'Relational Inventory Architecture with Indexed Search',
        description:
          'Architected with normalized PostgreSQL schemas with strict foreign-key integrity between patrons, book copies, lending transactions, and fine records. Built with an optimized RESTful API layer and responsive administrative dashboard.',
        highlights: [
          'PostgreSQL trigram indexes enabling ultra-fast partial and typo-tolerant book search',
          'Scheduled background cron jobs automating daily overdue status transitions and notifications',
          'Role-based access control (RBAC) separating librarian, student, and admin privileges',
        ],
      },
      beforeAfter: {
        beforeLabel: 'Manual Paper Checkout',
        beforeMetric: '12 Minutes',
        beforeDesc: 'Average librarian time per transaction to locate card, stamp due date, and log ledger.',
        afterLabel: 'With Library Management System',
        afterMetric: '3 Seconds',
        afterDesc: 'Instant barcode scan confirming book checkout and automatically emailing patron receipt.',
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
