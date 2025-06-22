import { createBrowserRouter } from 'react-router-dom'
import MainLayout from "../components/layout/MainLayout"
import NotFound from '../pages/NotFound/NotFound';
import Scales from '../pages/Scales/Scales';
import HarmonicFields from '../pages/HarmonicFields/HarmonicFields';
import RelativeChords from '../pages/RelativeChords/RelativeChords';
import CircleOfFifthsFourths from '../pages/CircleOfFifthsFourths/CircleOfFifthsFourths'
import Triads from '../pages/Formations/Triads/Triads';
import Tetrads from '../pages/Formations/Tetrads/Tetrads';

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
        path: "formations",
        children: [
          {
            path: "triads",
            element: <Triads/>
          },
          {
            path: "tetrads",
            element: <Tetrads/>
          },
        ]
      }, 
      { 
        path: "harmonicField",
        element: <HarmonicFields/>
      },
      {
        path: "relativeChords",
        element: <RelativeChords/>
      },
      {
        path: "circleOfFifthsFourths",
        element: <CircleOfFifthsFourths/>
      }
    ],
  },
]);