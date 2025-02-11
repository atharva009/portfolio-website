import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'CoinWise',
      url: 'https://expense-tracker-seven-omega.vercel.app/',
      repo: 'https://github.com/atharva009/ether-rider',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--expenses-tracker-neo-banking-pack-finance-icons-5727732.png',
      year: 2023,
      tags: ['React', 'Tailwind', 'Material-UI', 'Chart.js'],
    },
    {
      id: getId(),
      name: 'etherrider',
      url: 'https://www.itm-conferences.org/articles/itmconf/abs/2022/04/itmconf_icacc2022_03023/itmconf_icacc2022_03023.html',
      repo: '',
      img: 'https://www.peppyocean.com/wp-content/uploads/2023/03/top-ridesharing-apps.png',
      year: 2023,
      tags: ['Solidity', 'Python'],
    },
    {
      id: getId(),
      name: 'TBA',
      url: '',
      repo: '',
      img: 'https://media.istockphoto.com/id/1467339432/video/retro-buffering-circular-loading-bar-rotating-on-black-background.jpg?s=640x640&k=20&c=jOF3pEBv3EaXlgPHoa8CsOwOIg9gBNEPrXztQ_PXidQ=',
      year: 2023,
      tags: ['TBA'],
    },
    // * TODO: add projects here
  ],
};
