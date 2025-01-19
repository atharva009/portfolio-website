import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'expense tracker',
      url: '',
      repo: '',
      img: '',
      year: 2023,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'etherrider',
      url: '',
      repo: '',
      img: '',
      year: 2023,
      tags: ['Solidity', 'Python'],
    },
    // * TODO: add projects here
  ],
};
