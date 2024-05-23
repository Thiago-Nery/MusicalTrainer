import { createBrowserRouter } from 'react-router-dom'
import MainLayout from "../components/layout/MainLayout"
import NotFound from '../pages/NotFound/NotFound';
import Scales from '../pages/Scales/Scales';
import HarmonicFields from '../pages/HarmonicFields/HarmonicFields';
import RelativeChords from '../pages/RelativeChords/RelativeChords';


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "scales",
        element: <Scales />
      },
      {
        path: "harmonicField",
        element: <HarmonicFields/>
      },
      {
        path: "relativeChords",
        element: <RelativeChords/>
      }
    ],
  },
]);