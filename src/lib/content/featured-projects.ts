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
      url: 'https://atharva-hankare.notion.site/TalentCove-1b371b06b30a81978238c386ae5b3160',
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
      name: 'EverAfter',
      description: 'EverAfter is your AI-powered date planning companion that helps couples create, cherish, and discover unforgettable romantic experiences.',
      tasks:
        "Conceptualized, designed, and developed EverAfter—a personalized date planning platform enabling couples to log memories, revisit past experiences, and receive AI-powered itinerary suggestions. Built an intuitive, emotionally engaging interface focused on enhancing relationship moments through thoughtful planning and reflection.",
      url: 'https://atharva-hankare.notion.site/EverAfter-1b371b06b30a8045be13e54884cb78ec',
      img: '/everafter.png',
      tags: [
        'Java',
        'Spring Boot',
        'React Native',
        'MySQL'
      ],
    }
  ],
};

export default featuredProjectsSection;
