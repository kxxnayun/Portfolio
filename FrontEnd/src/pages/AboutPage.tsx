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
      <div className="mt-[93px] ml-[60px] flex items-start">
        <div>
          <div className="font-grotesk ml-[80px] text-[64px] font-bold">
            저는
            <div className="w-[350px] bg-[#F5D500]">도전을 즐기는</div>
            개발자입니다.
          </div>
          <p className="mt-[32px] ml-[80px] text-[24px]">
            맡은 일에 최선을 다하고 애정을 가지며 <br />팀 전체가 성장하는 것을 지향합니다.
          </p>

          <div className="mt-[93px] flex flex-row gap-x-[100px] font-mono">
            {/* EDUCATION */}
            <div>
              <p className="text-[22px]">EDUCATION</p>

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

            {/* Certifications */}
            <div>
              <p className="text-[22px]">CERTIFICATIONS</p>
            </div>
          </div>
        </div>
        <div className="relative h-[350px] w-[350px]">
          <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
          <img
            src={profile}
            alt="profile-image"
            className="absolute top-0 left-0 flex h-full w-full items-center justify-center border-black bg-[#fafafa]"></img>
        </div>
      </div>
    </div>
  );
}
