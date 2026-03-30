import type { Project } from '../types/Project';
import { Link } from 'react-router-dom';

export default function ProjectItem({ id, image, number, title, description, techStack }: Project) {
  return (
    <div className="mt-[40px] w-[660px]">
      <div className="relative h-[600px] w-[660px]">
        <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
        <Link
          to={`/project/${id}`}
          className="absolute top-0 left-0 h-full w-full border-[3px] border-black bg-[#fafafa]">
          {/* 프로젝트 이미지 */}
          <img src={image} alt={title} className="h-[371px] w-full object-cover" />

          {/* 프로젝트 정보 */}
          <div className="p-[20px] font-mono">
            <p className="text-[20px] text-[#777777]">{number}</p>
            <p className="mt-[4px] w-fit bg-[#F5D500] text-[32px] font-bold">{title}</p>
            <p className="mt-[8px] text-[20px] text-[#777777]">{description}</p>
            <div className="mt-[12px] flex flex-row gap-x-[8px]">
              {techStack.map((tech, index) => (
                <p key={index} className="border-[1.5px] border-black px-[12px] py-[4px] text-[14px]">
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
