import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Atharva Hankare',
  tagline: 'I design and build scalable, intuitive web and mobile applications.',
  description:
    "I'm a driven Full-Stack Developer with expertise in building scalable and efficient applications. On the frontend, I harness Next.js and TypeScript to create modern, responsive user experiences. On the backend, I specialize in Spring Boot, developing secure APIs and integrating relational databases. I'm also expanding my skillset into cross-platform development with Kotlin Multiplatform and Jetpack Compose, enabling seamless and cohesive user experiences across Android and other platforms.",
  // specialText: 'Actively seeking Summer 2025 Internship / Co-op opportunities.',
  cta: {
    title: 'view resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};