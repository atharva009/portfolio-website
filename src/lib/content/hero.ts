import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Atharva Hankare.',
  tagline: 'Crafting Scalable Web & Cross-Platform Experiences',
  description:
    "I'm a passionate Full-Stack Web Developer with hands-on experience in building robust and scalable web applications using React.js with TypeScript. I also have experience in backend development with Spring Boot, creating efficient and well-structured APIs. Currently, I’m diving deeper into cross-platform development by exploring Kotlin KMP to build seamless multi-platform applications and learning Jetpack Compose to design modern, intuitive Android UIs.",
  specialText: 'Currently looking for Summer 2025 Internship / Co-op',
  cta: {
    title: 'view resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
