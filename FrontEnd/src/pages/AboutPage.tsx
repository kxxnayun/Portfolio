import profile from '../assets/profile.svg';

export default function AboutPage() {
  return (
    <div
      className="relative w-full flex-1 overflow-hidden"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}>
      <div className="mt-[93px] ml-[60px] grid grid-cols-[auto_1fr] gap-x-[100px]">
        <div className="flex flex-col gap-y-[60px] font-mono">
          <div className="relative ml-[80px] h-[350px] w-[350px]">
            <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
            <img
              src={profile}
              alt="profile-image"
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center border-black bg-[#fafafa]"></img>
          </div>
          <div>
            <p className="mt-[30px] text-[22px]">EDUCATION</p>

            <div className="mt-[23px] flex flex-row text-[20px]">
              <p className="text-[#777777]">2024</p>
              <p className="ml-[40px]">Seokyeong university Software Major</p>
            </div>

            <div className="mt-[23px] flex flex-row text-[20px]">
              <p className="text-[#777777]">2025</p>
              <p className="ml-[40px]">9th UMC Web Challenger</p>
            </div>

            <div className="mt-[23px] flex flex-row text-[20px]">
              <p className="text-[#777777]">2026</p>
              <p className="ml-[40px]">10th UMC SKUNIV Leader and Web Challenger</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-[32px]">
          <div className="font-grotesk text-[64px] leading-20 font-bold">
            저는
            <div className="w-[350px] bg-[#F5D500]">도전을 즐기는</div>
            개발자입니다.
          </div>
          <p className="text-[24px]">
            함께 일하는 사람들과 좋은 흐름을 만들어 가는 것을 좋아합니다.
            <br />
            맡은 일에 최선을 다하고 팀과 함께 성장하는 것을 지향합니다.
          </p>
          <div className="font-mono">
            <p className="mt-[64px] text-[22px]">CERTIFICATIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
