import profile from '../assets/profile.svg';

export default function AboutPage() {
  return (
    <div
      className="relative w-full flex-1"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}>
      <div className="mt-[40px] px-[20px] pb-[60px] md:mt-[60px] md:px-[40px] lg:mt-[93px] lg:px-0 lg:pl-[60px] lg:pb-[100px]">
        {/* 모바일/태블릿: 이미지 + (제목/설명) 가로 배치, 그 아래 EDUCATION/CERTIFICATIONS */}
        <div className="flex flex-col gap-y-[32px] lg:hidden">
          <div className="flex flex-row gap-x-[16px] sm:gap-x-[24px] md:gap-x-[40px]">
            <div className="relative h-[140px] w-[140px] shrink-0 sm:h-[200px] sm:w-[200px] md:h-[280px] md:w-[280px]">
              <div className="absolute right-[-6px] bottom-[-6px] h-full w-full bg-black" />
              <img
                src={profile}
                alt="profile-image"
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center border-black bg-[#fafafa]"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-y-[12px] md:gap-y-[20px]">
              <div className="font-grotesk text-[22px] leading-tight font-bold sm:text-[32px] md:text-[44px]">
                저는
                <div className="w-fit bg-[#F5D500] pr-[8px]">도전을 즐기는</div>
                개발자입니다.
              </div>
              <p className="text-[13px] sm:text-[15px] md:text-[18px]">
                함께 일하는 사람들과 좋은 흐름을 만들어 가는 것을 좋아합니다. 맡은 일에 최선을 다하고 팀과 함께 성장하는 것을 지향합니다.
              </p>
            </div>
          </div>
          <div className="font-mono">
            <p className="text-[18px] md:text-[22px]">EDUCATION</p>
            <div className="mt-[16px] flex flex-row text-[15px] md:mt-[23px] md:text-[20px]">
              <p className="shrink-0 text-[#777777]">2024</p>
              <p className="ml-[20px] md:ml-[40px]">Seokyeong university Software Major</p>
            </div>
            <div className="mt-[16px] flex flex-row text-[15px] md:mt-[23px] md:text-[20px]">
              <p className="shrink-0 text-[#777777]">2025</p>
              <p className="ml-[20px] md:ml-[40px]">9th UMC Web Challenger</p>
            </div>
            <div className="mt-[16px] flex flex-row text-[15px] md:mt-[23px] md:text-[20px]">
              <p className="shrink-0 text-[#777777]">2026</p>
              <p className="ml-[20px] md:ml-[40px]">10th UMC SKUNIV Leader and Web Challenger</p>
            </div>
          </div>
          <div className="font-mono">
            <p className="text-[18px] md:text-[22px]">CERTIFICATIONS</p>
          </div>
        </div>

        {/* 데스크톱: 기존 2단 레이아웃 유지 */}
        <div className="hidden lg:grid lg:grid-cols-[auto_1fr] lg:gap-x-[100px]">
          <div className="flex flex-col gap-y-[60px] font-mono">
            <div className="relative ml-[80px] h-[350px] w-[350px]">
              <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
              <img
                src={profile}
                alt="profile-image"
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center border-black bg-[#fafafa]"
              />
            </div>
            <div>
              <p className="mt-[30px] text-[22px]">EDUCATION</p>
              <div className="mt-[23px] flex flex-row text-[20px]">
                <p className="shrink-0 text-[#777777]">2024</p>
                <p className="ml-[40px]">Seokyeong university Software Major</p>
              </div>
              <div className="mt-[23px] flex flex-row text-[20px]">
                <p className="shrink-0 text-[#777777]">2025</p>
                <p className="ml-[40px]">9th UMC Web Challenger</p>
              </div>
              <div className="mt-[23px] flex flex-row text-[20px]">
                <p className="shrink-0 text-[#777777]">2026</p>
                <p className="ml-[40px]">10th UMC SKUNIV Leader and Web Challenger</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-[32px]">
            <div className="font-grotesk text-[64px] leading-20 font-bold">
              저는
              <div className="w-fit bg-[#F5D500] pr-[8px]">도전을 즐기는</div>
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
    </div>
  );
}
