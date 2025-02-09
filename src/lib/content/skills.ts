import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: '03. what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/fullstack.json',
        dark: '/lotties/fullstack.json',
      },
      points: [
        'Designing and managing APIs and backend logic using Spring Boot with Hibernate, integrating relational databases effectively.',
        'Developing scalable, responsive web applications using Next.js, TypeScript, TailwindCSS, and Material UI.'
      ],      
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'java', icon: 'devicon:java' },
        { name: 'spring boot', icon: 'devicon:spring' },
        { name: 'javaScript', icon: 'devicon:javascript' },
        { name: 'typeScript', icon: 'devicon:typescript' },
        { name: 'nodejs', icon: 'devicon:nodejs' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'devicon:tailwindcss' },
        { name: 'material ui', icon: 'devicon:materialui' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'hibernate', icon: 'devicon:hibernate' },
        { name: 'maven', icon: 'devicon:maven' },
        { name: 'AWS', icon: 'skill-icons:aws-light' },
      ],
    },
    {
      id: getId(),
      title: 'Android Development',
      lottie: {
        light: '/lotties/android.json',
        dark: '/lotties/android.json',
      },
      points: [
        'Developing modern Android applications using Kotlin and Jetpack Compose, with intuitive UI and smooth user experiences.',
        'Designing user-friendly interfaces with Figma and managing lightweight local storage with SQLite.'
      ],      
      softwareSkills: [
        { name: 'android', icon: 'devicon:androidstudio' },
        { name: 'kotlin', icon: 'devicon:kotlin' },
        { name: 'Jetpack Compose', icon: 'devicon:jetpackcompose' },
        { name: 'SQLite', icon: 'devicon:sqlite' },
        { name: 'gradle', icon: 'skill-icons:gradle-light' },
        { name: 'figma', icon: 'devicon:figma' },
      ],
    }
  ],
};
