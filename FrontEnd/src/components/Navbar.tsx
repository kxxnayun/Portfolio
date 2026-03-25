export default function Navbar() {
  return (
    <div className="flex h-[106px] w-full items-center border-b-2 bg-[#FAFAFA] px-[60px]">
      <p className="font-grotesk text-8 text-[32px] font-bold text-black">KIM NAYUN</p>

      <div className="font-grotesk ml-auto flex h-[49px] border-2 border-black text-[20px]">
        <button className="w-[92px] font-bold">HOME</button>

        <div className="w-[2px] bg-black" />
        <button className="w-[101px] bg-[#FAFAFA] font-bold">ABOUT</button>

        <div className="w-[2px] bg-black" />
        <button className="w-[122px] bg-[#FAFAFA] font-bold">PROJECT</button>
      </div>
    </div>
  );
}
