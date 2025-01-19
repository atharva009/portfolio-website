import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'expense tracker',
      url: 'https://expense-tracker-seven-omega.vercel.app/',
      repo: 'https://github.com/atharva009/ether-rider',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--expenses-tracker-neo-banking-pack-finance-icons-5727732.png',
      year: 2023,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'etherrider',
      url: '',
      repo: '',
      img: 'https://www.peppyocean.com/wp-content/uploads/2023/03/top-ridesharing-apps.png',
      year: 2023,
      tags: ['Solidity', 'Python'],
    },
    // * TODO: add projects here
  ],
};
