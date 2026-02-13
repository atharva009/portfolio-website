import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "04. projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'TalentCove',
      description: 'A Talent Management and Employee Engagement Platform.',
      tasks:
        "Conceptualized, designed, and developed the TalentCove platform to address challenges in talent management and employee engagement. The project involved building an intuitive frontend interface, developing backend services, and deploying the application on a scalable cloud infrastructure.",
      url: 'https://www.notion.so/atharva-hankare/TalentCove-1b371b06b30a81978238c386ae5b3160',
      img: '/talentcove.png',
      tags: [
        'React',
        'Node.js',
        'TypeScript',
        'Material-UI',
        'MongoDB'
      ],
    },
    {
      id: getId(),
      name: 'Alimento',
      description: 'An AI-powered pantry, meal planning, and grocery automation iOS app built with SwiftUI.',
      tasks:
        "Designed and developed Alimento, a native iOS application that helps students manage pantry inventory, log cooked dishes, plan weekly meals, and generate grocery lists. Built using SwiftUI, SwiftData, and async/await, the app features a transactional inventory system, structured AI integrations with Gemini for meal suggestions and weekly planning, and an action-based AI assistant capable of safely executing tool-driven operations such as updating inventory and generating grocery lists. Implemented strict JSON validation, local-first persistence, accessibility support, and a modular MVVM architecture following Apple Human Interface Guidelines.",
      url: 'https://www.notion.so/atharva-hankare/Alimento-30671b06b30a80e4a579eb0bcb4be284',
      img: '/alimento.jpeg',
      tags: [
        'Swift',
        'SwiftUI',
        'SwiftData',
        'Gemini AI',
        'MVVM',
        'iOS'
      ],
    },    
    {
      id: getId(),
      name: 'EverAfter',
      description: 'EverAfter is your AI-powered date planning companion that helps couples create, cherish, and discover unforgettable romantic experiences.',
      tasks:
        "Conceptualized, designed, and developed EverAfter—a personalized date planning platform enabling couples to log memories, revisit past experiences, and receive AI-powered itinerary suggestions. Built an intuitive, emotionally engaging interface focused on enhancing relationship moments through thoughtful planning and reflection.",
      url: 'https://www.notion.so/atharva-hankare/EverAfter-1b371b06b30a8045be13e54884cb78ec',
      img: '/everafter.png',
      tags: [
        'Java',
        'Spring Boot',
        'React Native',
        'MySQL'
      ],
    },
    {
      id: getId(),
      name: 'DeliDuty',
      description: 'A native iOS shift scheduling app for deli management with automatic schedule generation, built with SwiftUI and SwiftData.',
      tasks:
        "Designed and developed DeliDuty, a native iOS application that automates employee shift scheduling for deli operations. Built using SwiftUI, SwiftData, and MVVM architecture, the app features an intelligent scheduling engine that generates weekly schedules while respecting complex business constraints including employee hour limits, manager-specific rules, minimum coverage requirements, and rest period enforcement. Implemented a constraint validation system, coverage analysis with real-time gap detection, fair hour distribution algorithms, and a comprehensive dashboard with analytics and export functionality. The app includes push notifications for shift reminders, haptic feedback, and follows Apple Human Interface Guidelines with a polished UI featuring animated components and accessibility support.",
      url: 'https://www.notion.so/atharva-hankare/DeliDuty-30671b06b30a808d89dcea1c099eef94',
      img: '/deliduty.jpeg',
      tags: [
        'Swift',
        'SwiftUI',
        'SwiftData',
        'MVVM',
        'iOS',
        'Algorithms'
      ],
    },
  ],
};

export default featuredProjectsSection;
