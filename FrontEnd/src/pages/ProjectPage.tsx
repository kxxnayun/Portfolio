import { projects } from '../types/Project';
import ProjectItem from '../components/ProjectItem';

export default function ProjectPage() {
  return (
    <div
      className="relative w-full flex-1"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}>
      <div className="mt-[40px] flex flex-col items-start px-[20px] md:mt-[70px] md:px-[40px] lg:mt-[102px] lg:px-0 lg:pl-[60px]">
        <div className="font-grotesk text-[32px] font-bold md:text-[40px] lg:text-[48px]">PROJECTS</div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[20px] px-[20px] pb-[60px] md:gap-x-[40px] md:px-[40px] lg:px-0">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
