import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex min-h-screen w-[1440px] flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
