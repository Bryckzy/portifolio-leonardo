
import type React from 'react';

export interface ProjectItem {
  name: string;
  description?: string;
  tech?: string[];
}

export interface Skill {
  name: string;
  description: string;
  icon?: string;
  level: number;
  maxLevel: number;
}

export interface Language {
  name: string;
  proficiency: string;
  code?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  description?: string;
  logoUrl?: string;
  period?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  logoUrl?: string;
  projects?: ProjectItem[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
  logoUrl?: string;
}

export interface ContactLink {
  href: string;
  label: string;
  icon: React.ReactElement<{ className?: string }>;
  ariaLabel: string;
}

export interface ProjectShowcaseItem {
  id: string;
  name: string;
  category: string; 
  shortDescription: string;
  imageUrl: string; 
  techStack?: string[];
  liveLink?: string;
  impact?: string;
  metrics?: string[];
}

export interface NavLink {
  href: string;
  label: string;
}