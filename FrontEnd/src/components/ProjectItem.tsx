import type { Project } from '../types/Project';
import { Link } from 'react-router-dom';

export default function ProjectItem({ id, image, number, title, description, techStack }: Project) {
  return (
    <div className="mt-[20px] w-full max-w-[660px] md:mt-[40px]">
      <div className="relative w-full">
        <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
        <Link
          to={`/project/${id}`}
          className="relative block w-full border-[3px] border-black bg-[#fafafa]">
          {/* 프로젝트 이미지 */}
          <img src={image} alt={title} className="aspect-[660/371] w-full object-cover" />

          {/* 프로젝트 정보 */}
          <div className="p-[16px] font-mono md:p-[20px]">
            <p className="text-[14px] text-[#777777] md:text-[20px]">{number}</p>
            <p className="mt-[4px] w-fit bg-[#F5D500] text-[22px] font-bold md:text-[32px]">{title}</p>
            <p className="mt-[8px] text-[14px] text-[#777777] md:text-[20px]">{description}</p>
            <div className="mt-[12px] flex flex-row flex-wrap gap-[8px]">
              {techStack.map((tech, index) => (
                <p key={index} className="border-[1.5px] border-black px-[10px] py-[3px] text-[12px] md:px-[12px] md:py-[4px] md:text-[14px]">
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
