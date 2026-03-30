import deare from '../assets/deare.png';

export interface Project {
  id: number;
  image: string;
  number: string;
  title: string;
  description: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    image: deare,
    number: '01',
    title: 'Dear.E',
    description: '아날로그의 온기를 스마트하게, 편지 아카이빙 서비스',
    techStack: ['React', 'TypeScript'],
  },
  {
    id: 2,
    image: deare,
    number: '01',
    title: 'Dear.E',
    description: '아날로그의 온기를 스마트하게, 편지 아카이빙 서비스',
    techStack: ['React', 'TypeScript'],
  },
];
