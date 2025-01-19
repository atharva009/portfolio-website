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
        'Designing and managing robust APIs and backend logic using Spring Boot with Hibernate',
        'Building frontend using Next.js with TypeScript, TailwindCSS',
        'Styling modern, responsive web applications using TailwindCSS and Material UI',
        'Integrating and managing relational databases with SQL and ORM tools like Hibernate',
        'Developing scalable and modular backend applications using Maven for project and dependency management',
        'Deploying and managing cloud infrastructure on AWS for scalable application hosting and storage'
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
        'Building modern Android applications using Kotlin and Jetpack Compose for intuitive UI design and smooth user experiences.',
        'Designing and prototyping UI/UX with Figma to create user-friendly and visually appealing interfaces',
        'Developing and managing local databases with SQLite for lightweight and efficient data storage in Android applications',
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
