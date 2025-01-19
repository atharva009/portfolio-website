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
      url: '',
      img: '/talent-cove-home.png',
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
