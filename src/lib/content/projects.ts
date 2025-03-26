import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'Boston311',
      url: '',
      repo: '',
      img: '/boston311.jpeg',
      year: 2025,
      tags: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'JSP'],
    },
    {
      id: getId(),
      name: 'TripSync',
      url: 'https://atharva-hankare.notion.site/TripSync-1b371b06b30a81fba3a2d89e6b44c42d',
      repo: '',
      img: '/tripsync.png',
      year: 2024,
      tags: ['Java', 'Spring Boot', 'React', 'TypeScript'],
    },
    {
      id: getId(),
      name: 'GigCentral',
      url: 'https://atharva-hankare.notion.site/Gig-Central-1b371b06b30a81229c5beecb52f7c3a2',
      repo: '',
      img: '/gigcentral.jpeg',
      year: 2023,
      tags: ['React', 'TypeScript', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'etherrider',
      url: 'https://www.itm-conferences.org/articles/itmconf/abs/2022/04/itmconf_icacc2022_03023/itmconf_icacc2022_03023.html',
      repo: '',
      img: '/etherrider.jpeg',
      year: 2022,
      tags: ['Solidity', 'Python', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'CoinWise',
      url: 'https://expense-tracker-seven-omega.vercel.app/',
      repo: '',
      img: '/coinwise.jpeg',
      year: 2022,
      tags: ['React', 'Tailwind', 'Material-UI', 'Chart.js'],
    },
  ],
};
