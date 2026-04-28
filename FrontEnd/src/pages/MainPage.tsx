import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div
      className="relative w-full flex-1"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}>
      <div className="mt-[60px] flex flex-col items-start gap-[40px] px-[20px] pb-[60px] md:mt-[120px] md:px-[40px] lg:mt-[190px] lg:flex-row lg:gap-0 lg:px-0 lg:pl-[60px] lg:pb-[100px]">
        <div className="w-full lg:w-auto">
          <div className="font-grotesk text-[44px] leading-none font-bold sm:text-[64px] md:text-[80px] lg:text-[96px]">
            <div className="text-[#fafafa]" style={{ WebkitTextStroke: '2px black' }}>
              I BUILD
            </div>
            <div>THINGS FOR</div>
            <div className="w-fit bg-[#F5D500] pr-[8px]">THE WEB</div>
          </div>

          <p className="mt-[24px] text-[16px] sm:text-[18px] md:mt-[36px] md:text-[20px] lg:mt-[43px] lg:text-[24px]">
            어제보다 더 나은 내일을 만들고 싶은 개발자 김나윤입니다! <br />
            익숙함에 머물기보다는 지속적으로 성장하는 개발자를 목표로 합니다.
          </p>

          <div className="mt-[40px] flex gap-[16px] md:mt-[56px] md:gap-[20px] lg:mt-[72px] lg:ml-[95px] lg:gap-[24px]">
            <div className="relative h-[48px] w-[120px] md:h-[56px] md:w-[140px] lg:h-[61px] lg:w-[151px]">
              <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
              <Link
                to="/project"
                className="font-grotesk absolute top-0 left-0 flex h-full w-full items-center justify-center border-[3px] border-black bg-[#fafafa] text-[16px] font-bold transition-colors duration-200 hover:bg-[#F5D500] md:text-[18px] lg:text-[20px]">
                PROJECT →
              </Link>
            </div>

            <div className="relative h-[48px] w-[120px] md:h-[56px] md:w-[140px] lg:h-[61px] lg:w-[151px]">
              <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
              <Link
                to="/about"
                className="font-grotesk absolute top-0 left-0 flex h-full w-full items-center justify-center border-[3px] border-black bg-[#fafafa] text-[16px] font-bold transition-colors duration-200 hover:bg-[#F5D500] md:text-[18px] lg:text-[20px]">
                ABOUT ME
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[544px] lg:mr-[60px] lg:ml-auto lg:w-[544px]">
          <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />

          <div className="relative border-[3px] border-black bg-[#fafafa]">
            <div className="flex h-[40px] w-full items-center bg-black px-[16px] font-mono text-[14px] text-[#fafafa] md:h-[47px] md:px-[24px] md:text-[20px]">
              INFO.TXT
            </div>

            <div className="divide-y divide-black">
              {[
                { label: 'NAME', value: '김나윤' },
                { label: 'ROLE', value: 'FE Developer' },
                { label: 'EMAIL', value: 'nayun2179@gmail.com' },
                { label: 'GITHUB', value: 'github.com/kxxnayun' },
                { label: 'LINKEDIN', value: 'linkedin.com/in/kxxnayun' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-[12px] px-[16px] py-[10px] font-mono text-[13px] md:px-[24px] md:py-[16px] md:text-[20px]">
                  <span className="shrink-0">{item.label}</span>
                  <span className="truncate text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
