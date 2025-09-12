import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'Boston311',
      url: '',
      repo: 'https://www.notion.so/atharva-hankare/Boston311-1c171b06b30a8091bfb2c110f72841b0',
      img: '/boston311.jpeg',
      year: 2025,
      tags: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'JSP'],
    },
    {
      id: getId(),
      name: 'MyBostonHood',
      url: '',
      repo: 'https://www.notion.so/atharva-hankare/MyBostonHood-1b371b06b30a81e796ebef7e320d932e',
      img: '/bostonhood.jpg',
      year: 2025,
      tags: ['Java', 'JFreeChart', 'Algorithms', 'MVC Architecture', 'Java Swing'],
    },
    {
      id: getId(),
      name: 'TripSync',
      url: 'https://www.notion.so/atharva-hankare/TripSync-1b371b06b30a81fba3a2d89e6b44c42d',
      repo: '',
      img: '/tripsync.png',
      year: 2024,
      tags: ['Java', 'Spring Boot', 'React', 'TypeScript'],
    },
    {
      id: getId(),
      name: 'GigCentral',
      url: 'https://www.notion.so/atharva-hankare/Gig-Central-1b371b06b30a81229c5beecb52f7c3a2',
      repo: '',
      img: '/gigcentral.jpeg',
      year: 2023,
      tags: ['React', 'TypeScript', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'etherrider',
      url: 'https://www.notion.so/atharva-hankare/EtherRider-1c171b06b30a801fba02d027e566ead1',
      repo: '',
      img: '/etherrider.jpeg',
      year: 2022,
      tags: ['Solidity', 'Python', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'CoinWise',
      url: 'https://www.notion.so/atharva-hankare/CoinWise-1b371b06b30a815ba6dbe7bc4298ffe4',
      repo: '',
      img: '/coinwise.jpeg',
      year: 2022,
      tags: ['React', 'Tailwind', 'Material-UI', 'Chart.js'],
    },
  ],
};
