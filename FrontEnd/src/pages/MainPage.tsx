export default function MainPage() {
  return (
    <div className="mt-[296px] ml-[60px] flex items-start">
      <div>
        <div className="font-grotesk text-[96px] leading-none font-bold">
          <div className="text-[#fafafa]" style={{ WebkitTextStroke: '2px black' }}>
            I BUILD
          </div>
          <div>THINGS FOR</div>
          <div className="w-[400px] bg-[#F5D500]">THE WEB</div>
        </div>

        <p className="mt-[43px] text-[24px]">
          어제보다 더 나은 내일을 만들고 싶은 개발자 김나윤입니다! <br /> 익숙함에 머물기보다는 지속적으로 성장하는
          개발자를 목표로 합니다.
        </p>

        <div className="mt-[72px] ml-[95px] flex gap-[24px]">
          <div className="relative h-[61px] w-[151px]">
            <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
            <button className="font-grotesk absolute top-0 left-0 h-full w-full cursor-pointer border-[3px] border-black bg-[#F5D500] text-[20px] font-bold">
              PROJECT →
            </button>
          </div>

          <div className="relative h-[61px] w-[151px]">
            <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
            <button className="font-grotesk absolute top-0 left-0 h-full w-full cursor-pointer border-[3px] border-black bg-[#fafafa] text-[20px] font-bold">
              ABOUT ME
            </button>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="relative mr-[60px] ml-auto h-[370px] w-[544px]">
        <div className="absolute right-[-8px] bottom-[-8px] h-full w-full bg-black" />
        <div className="absolute top-0 left-0 h-full w-full border-[3px] border-black bg-[#fafafa]">
          <div className="flex h-[47px] w-full items-center bg-black px-[24px] font-mono text-[20px] text-[#fafafa]">
            INFO.TXT
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-full border-[3px] border-black bg-[#fafafa]">
          <div className="flex h-[47px] w-full items-center bg-black px-[24px] font-mono text-[20px] text-[#fafafa]">
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
                className="flex items-center justify-between px-[24px] py-[16px] font-mono text-[20px]">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
