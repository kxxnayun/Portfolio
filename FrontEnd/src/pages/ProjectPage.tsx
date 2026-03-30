import { projects } from '../types/Project';
import ProjectItem from '../components/ProjectItem';

export default function ProjectPage() {
  return (
    <div
      className="relative w-full flex-1 overflow-hidden"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}>
      <div className="mt-[102px] ml-[60px] flex flex-col items-start">
        <div className="font-grotesk text-[48px] font-bold">PROJECTS</div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[40px]">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
