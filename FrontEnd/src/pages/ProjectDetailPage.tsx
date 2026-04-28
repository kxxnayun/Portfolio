import { projectDetail } from '../types/Project';
import { useNavigate, useParams } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';

export default function ProjectDetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const detail = projectDetail[Number(id) - 1];
  if (!detail) return <div>Not Found</div>;

  const { image, title, techStack, myRole, stackDescription, githubUrl } = detail;
  return (
    <div
      className="relative flex w-full flex-1 justify-center"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}>
      <div className="flex w-full max-w-[960px] flex-col px-[16px] pb-[60px] sm:px-[24px] md:pb-[100px]">
        <div className="mt-[30px] flex justify-end md:mt-[50px]">
          <button onClick={() => navigate('/project')} className="relative">
            <div className="absolute right-[-4px] bottom-[-4px] h-full w-full bg-black" />
            <div className="relative border-[2px] border-black bg-white px-[14px] py-[8px] text-[11px] font-semibold tracking-widest md:px-[20px] md:py-[10px] md:text-[13px]">
              ← BACK TO PROJECT
            </div>
          </button>
        </div>
        <div className="relative mt-[30px] aspect-[16/9] w-full md:mt-[60px]">
          <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
          <div className="relative h-full w-full border-[3px] border-black">
            <img src={image} alt={title} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-[30px] flex flex-col items-start justify-between gap-[20px] md:mt-[50px] md:flex-row md:items-start md:gap-0">
          <div className="w-full md:w-auto">
            <h1 className="text-[28px] font-bold sm:text-[36px] md:text-[48px]">{title}</h1>
            <div className="mt-[12px] flex flex-wrap gap-[8px]">
              {techStack?.map((stack) => (
                <p
                  key={stack}
                  className="border-[2px] border-black bg-[#FAFAFA] px-[14px] py-[6px] text-[14px] font-medium md:px-[20px] md:py-[10px] md:text-[18px]">
                  {stack}
                </p>
              ))}
            </div>
          </div>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="relative shrink-0 self-end md:self-auto">
            <div className="absolute right-[-4px] bottom-[-4px] h-full w-full bg-black" />
            <div className="relative border-[2px] border-black bg-white px-[14px] py-[8px] text-[11px] font-semibold tracking-widest md:px-[20px] md:py-[10px] md:text-[13px]">
              GITHUB →
            </div>
          </a>
        </div>

        {/* MY ROLE */}
        <div className="mt-[30px] md:mt-[40px]">
          <p className="mb-[12px] text-[18px] font-medium tracking-widest text-black md:mb-[16px] md:text-[24px]">MY ROLE</p>
          <div className="border-[2px] border-black bg-white">
            {myRole?.map((role, index) => (
              <div
                key={index}
                className={`px-[16px] py-[16px] md:px-[24px] md:py-[20px] ${index !== myRole.length - 1 ? 'border-b border-black/20' : ''}`}>
                <div className="flex items-center gap-[8px]">
                  <p className="h-[14px] w-[14px] shrink-0 border-1 bg-yellow-400 md:h-[16px] md:w-[16px]" />
                  <p className="font-grotesk text-[16px] font-semibold md:text-[20px]">{role.title}</p>
                </div>
                <p className="mt-[4px] ml-[22px] text-[14px] text-black/60 md:ml-[24px] md:text-[16px]">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY THIS STACK */}
        <div className="mt-[30px] md:mt-[40px]">
          <p className="mb-[12px] text-[18px] font-medium tracking-widest text-black md:mb-[16px] md:text-[24px]">WHY THIS STACK</p>
          <div className="border-[2px] border-black bg-white">
            {stackDescription?.map((stack, index) => (
              <div
                key={index}
                className={`px-[16px] py-[16px] md:px-[24px] md:py-[20px] ${index !== stackDescription.length - 1 ? 'border-b border-black/20' : ''}`}>
                <div className="flex items-center gap-[8px]">
                  <p className="h-[14px] w-[14px] shrink-0 border-1 bg-yellow-400 md:h-[16px] md:w-[16px]" />
                  <p className="font-grotesk text-[16px] font-semibold md:text-[20px]">{stack.name}</p>
                </div>
                <p className="mt-[4px] ml-[22px] text-[14px] text-black/60 md:ml-[24px] md:text-[16px]">{stack.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px] overflow-x-auto md:mt-[40px]">
          <GitHubCalendar username="kxxnayun" />
        </div>
      </div>
    </div>
  );
}
