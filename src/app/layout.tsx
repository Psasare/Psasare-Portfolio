import type { Metadata } from 'next';
import './globals.css';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

export const metadata: Metadata = {
  title: `${PORTFOLIO_CONFIG.profile.name} — ${PORTFOLIO_CONFIG.profile.role}`,
  description: `${PORTFOLIO_CONFIG.profile.tagline} Final-year Computer Science candidate building resilient AI and offline-first healthcare systems in Ghana.`,
  keywords: [
    'Prosper Shaibu Asare',
    'Prosper Asare',
    'Psasare',
    'Software Engineer',
    'Creative Technologist',
    'Ghana',
    'Ho, Ghana',
    'Ho',
    'Next.js',
    'GSAP',
    'Three.js',
    'MindBridge - Mental Health Navigator Mobile App for Tertiary Students',
    'Bloom Maternal Health App',
    'Course Registration System',
    'Library Management System',
    'Apple-inspired portfolio',
  ],
  authors: [{ name: PORTFOLIO_CONFIG.profile.name, url: 'https://psasare.dev' }],
  creator: PORTFOLIO_CONFIG.profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://psasare.dev',
    title: `${PORTFOLIO_CONFIG.profile.name} — ${PORTFOLIO_CONFIG.profile.role}`,
    description: PORTFOLIO_CONFIG.profile.tagline,
    siteName: `${PORTFOLIO_CONFIG.profile.name} Portfolio`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_CONFIG.profile.name} — Engineering Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PORTFOLIO_CONFIG.profile.name} — ${PORTFOLIO_CONFIG.profile.role}`,
    description: PORTFOLIO_CONFIG.profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070709] text-[#f5f5f7] antialiased selection:bg-[#0071e3] selection:text-white">
        {/* Accessible Skip to Main Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:text-black focus:px-6 focus:py-3 focus:font-semibold focus:shadow-2xl"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
