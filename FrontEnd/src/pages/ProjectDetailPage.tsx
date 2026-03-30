import { projectDetail } from '../types/Project';
import { useNavigate, useParams } from 'react-router-dom';

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
      <div className="flex w-[960px] flex-col pb-[100px]">
        <div className="mt-[50px] flex justify-end">
          <button onClick={() => navigate('/project')} className="relative">
            <div className="absolute right-[-4px] bottom-[-4px] h-full w-full bg-black" />
            <div className="relative border-[2px] border-black bg-white px-[20px] py-[10px] text-[13px] font-semibold tracking-widest">
              ← BACK TO PROJECT
            </div>
          </button>
        </div>
        <div className="relative mt-[60px] h-[540px] w-[960px]">
          <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
          <div className="relative h-full w-full border-[3px] border-black">
            <img src={image} alt={title} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-[50px] flex items-start justify-between">
          <div>
            <h1 className="text-[48px] font-bold">{title}</h1>
            <div className="mt-[12px] flex gap-[8px]">
              {techStack?.map((stack) => (
                <p
                  key={stack}
                  className="border-[2px] border-black bg-[#FAFAFA] px-[20px] py-[10px] text-[18px] font-medium">
                  {stack}
                </p>
              ))}
            </div>
          </div>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="relative">
            <div className="absolute right-[-4px] bottom-[-4px] h-full w-full bg-black" />
            <div className="relative border-[2px] border-black bg-white px-[20px] py-[10px] text-[13px] font-semibold tracking-widest">
              GITHUB →
            </div>
          </a>
        </div>

        {/* MY ROLE */}
        <div className="mt-[40px]">
          <p className="mb-[16px] text-[24px] font-medium tracking-widest text-black">MY ROLE</p>
          <div className="border-[2px] border-black bg-white">
            {myRole?.map((role, index) => (
              <div
                key={index}
                className={`px-[24px] py-[20px] ${index !== myRole.length - 1 ? 'border-b border-black/20' : ''}`}>
                <div className="flex items-center gap-[8px]">
                  <p className="h-[16px] w-[16px] border-1 bg-yellow-400" />
                  <p className="font-grotesk text-[20px] font-semibold">{role.title}</p>
                </div>
                <p className="mt-[4px] ml-[18px] text-[16px] text-black/60">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY THIS STACK */}
        <div className="mt-[40px]">
          <p className="mb-[16px] text-[24px] font-medium tracking-widest text-black">WHY THIS STACK</p>
          <div className="border-[2px] border-black bg-white">
            {stackDescription?.map((stack, index) => (
              <div
                key={index}
                className={`px-[24px] py-[20px] ${index !== stackDescription.length - 1 ? 'border-b border-black/20' : ''}`}>
                <div className="flex items-center gap-[8px]">
                  <p className="h-[16px] w-[16px] border-1 bg-yellow-400" />
                  <p className="font-grotesk text-[20px] font-semibold">{stack.name}</p>
                </div>
                <p className="mt-[4px] ml-[18px] text-[16px] text-black/60">{stack.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
