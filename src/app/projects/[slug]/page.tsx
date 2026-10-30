import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { CaseStudyView } from '@/components/CaseStudyView';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PORTFOLIO_CONFIG.projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PORTFOLIO_CONFIG.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: `Project Not Found · ${PORTFOLIO_CONFIG.profile.name}`,
    };
  }

  return {
    title: `${project.title} · Case Study by ${PORTFOLIO_CONFIG.profile.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${project.category}`,
      description: project.summary,
      url: `https://psasare.dev/projects/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = PORTFOLIO_CONFIG.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView slug={params.slug} />;
}
