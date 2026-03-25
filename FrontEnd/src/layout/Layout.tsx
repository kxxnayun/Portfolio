import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="w-full bg-neutral-200">
      <div className="mx-auto flex h-[1024px] max-w-[1440px] flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
