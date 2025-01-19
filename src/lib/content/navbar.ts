import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: '01. about', url: '/#about' },
    { name: '02. experience', url: '/#experience' },
    { name: '03. skills', url: '/#skills' },
    { name: '04. projects', url: '/#projects' },
    { name: '05. contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};
