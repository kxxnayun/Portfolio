import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex h-[72px] w-full shrink-0 items-center border-b-2 bg-[#FAFAFA] px-[20px] md:h-[106px] md:px-[60px]">
      <p className="font-grotesk text-[20px] font-bold text-black md:text-[32px]">KIM NAYUN</p>
      <div className="font-grotesk ml-auto flex h-[40px] border-2 border-black text-[14px] md:h-[49px] md:text-[20px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex w-[64px] items-center justify-center font-bold md:w-[92px] ${isActive ? 'bg-[#F5D500]' : ''}`
          }>
          HOME
        </NavLink>

        <div className="w-[2px] bg-black" />

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex w-[72px] items-center justify-center font-bold md:w-[101px] ${isActive ? 'bg-[#F5D500]' : 'bg-[#FAFAFA]'}`
          }>
          ABOUT
        </NavLink>

        <div className="w-[2px] bg-black" />

        <NavLink
          to="/project"
          className={({ isActive }) =>
            `flex w-[84px] items-center justify-center font-bold md:w-[122px] ${isActive ? 'bg-[#F5D500]' : 'bg-[#FAFAFA]'}`
          }>
          PROJECT
        </NavLink>
      </div>
    </div>
  );
}
