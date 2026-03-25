import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex h-[106px] w-full items-center border-b-2 bg-[#FAFAFA] px-[60px]">
      <p className="font-grotesk text-[32px] font-bold text-black">KIM NAYUN</p>

      <div className="font-grotesk ml-auto flex h-[49px] border-2 border-black text-[20px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex w-[92px] items-center justify-center font-bold ${isActive ? 'bg-[#F5D500]' : ''}`
          }>
          HOME
        </NavLink>

        <div className="w-[2px] bg-black" />

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex w-[101px] items-center justify-center font-bold ${isActive ? 'bg-[#F5D500]' : 'bg-[#FAFAFA]'}`
          }>
          ABOUT
        </NavLink>

        <div className="w-[2px] bg-black" />

        <NavLink
          to="/project"
          className={({ isActive }) =>
            `flex w-[122px] items-center justify-center font-bold ${isActive ? 'bg-[#F5D500]' : 'bg-[#FAFAFA]'}`
          }>
          PROJECT
        </NavLink>
      </div>
    </div>
  );
}
