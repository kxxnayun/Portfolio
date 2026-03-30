import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Layout from '../layout/Layout';
import ProjectPage from '../pages/ProjectPage';
import AboutPage from '../pages/AboutPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'project', element: <ProjectPage /> },
      { path: 'project/:id', element: <ProjectDetailPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]);
