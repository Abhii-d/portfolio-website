// Core data types for portfolio website

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  isCurrentRole: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web' | 'mobile' | 'backend' | 'automation' | 'other';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  profileImage?: string;
  resumeUrl?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Component prop types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseProps {
  id?: string;
  title?: string;
}

// Theme types
export type Theme = 'light' | 'dark';

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
