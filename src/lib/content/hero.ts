import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Atharva Hankare',
  tagline: 'I build scalable, cloud-native apps and AI-driven products.',
  description:
    "I’m a Software Engineer crafting scalable backend systems, cloud-native apps, and intelligent AI solutions. From Spring Boot to AWS to Agentic AI, I love turning complex tech into impactful, future-ready platforms. Always exploring new tools and ideas, I aim to push boundaries and build systems that truly make a difference.",
  // specialText: 'Actively seeking Summer 2025 Internship / Co-op opportunities.',
  cta: {
    title: 'view resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};