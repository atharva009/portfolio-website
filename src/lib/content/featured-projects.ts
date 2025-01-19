import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "04. projects i've worked on",
  projects: [
    // {
    //   id: getId(),
    //   name: 'GetLifeGuard',
    //   description: 'An E-Commerce platform for Self-Defense Keychain.',
    //   tasks:
    //     "As a freelancer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
    //   url: 'https://www.getlifegard.com/',
    //   img: 'https://www.getlifegard.com/images/og.png',
    //   tags: [
    //     'NextJs 14',
    //     'TypeScript',
    //     'TailwindCSS',
    //     'ShadCN',
    //     'Prisma',
    //     'Stripe',
    //   ],
    // },
    {
      id: getId(),
      name: 'TalentCove',
      description: 'A Talent Management and Employee Engagement Platform.',
      tasks:
        "Conceptualized, designed, and developed the TalentCove platform to address challenges in talent management and employee engagement. The project involved building an intuitive frontend interface, developing backend services, and deploying the application on a scalable cloud infrastructure.",
      url: '',
      img: '',
      tags: [
        'React',
        'Node.js',
        'TypeScript',
        'Material-UI',
        'MongoDB',
        'AWS',
      ],
    }
    // * TODO: add projects here
  ],
};

export default featuredProjectsSection;
