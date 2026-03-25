import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar from '../components/Navbar';
import MainPage from '../pages/MainPage';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);
