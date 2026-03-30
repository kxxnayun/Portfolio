import deare from '../assets/deare.png';

export interface Project {
  id: number;
  image: string;
  number: string;
  title: string;
  description: string;
  techStack: string[];
}

export interface RoleItem {
  title: string;
  description: string;
}

export interface StackItem {
  name: string;
  description: string;
}

export interface ProjectDetail {
  image: string;
  title: string;
  techStack: string[];
  myRole: RoleItem[];
  stackDescription: StackItem[];
  githubUrl: string;
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

export const projectDetail: ProjectDetail[] = [
  {
    image: deare,
    title: 'Dear.E',
    techStack: ['React', 'TypeScript'],
    myRole: [
      {
        title: '홈화면 구현',
        description:
          '어쩌고저쩌고 설명dddddd어쩌고저쩌고 설명dddddd어쩌고저쩌고 설명dddddd어쩌고저쩌고 설명dddddd어쩌고저쩌고 설명dddddd어쩌고저쩌고 설명dddddd어쩌고저쩌고 설명dddddd어쩌고저쩌고 설명dddddd',
      },
      { title: '편지함 구현', description: '어쩌고저쩌고 설명' },
      { title: '리포트 화면 구현', description: '어쩌고저쩌고 설명' },
    ],
    stackDescription: [
      { name: 'React', description: '어쩌고저쩌고 설명' },
      { name: 'TypeScript', description: '어쩌고저쩌고 설명' },
    ],
    githubUrl: 'https://github.com/kxxnayun/DearE-FrontEnd',
  },
];
