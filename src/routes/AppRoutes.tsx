import { createBrowserRouter } from 'react-router-dom'
import MainLayout from "../components/layout/MainLayout"
import NotFound from '../pages/NotFound/NotFound';
import IntervalClassification from '../pages/Interval/Classification/IntervalClassification';
import IntervalInversion from '../pages/Interval/Inversion/IntervalInversion';
import Scales from '../pages/Scales/Scales';
import HarmonicFields from '../pages/HarmonicFields/HarmonicFields';
import RelativeChords from '../pages/RelativeChords/RelativeChords';
import CircleOfFifthsFourths from '../pages/CircleOfFifthsFourths/CircleOfFifthsFourths'
import Triads from '../pages/Formations/Triads/Triads';
import Tetrads from '../pages/Formations/Tetrads/Tetrads';
import TrebleClef from '../pages/Staff/TrebleClef/TrebleClef'
import BassClef from '../pages/Staff/BassClef/BassClef'

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "intervals",
        children: [
          {
            path: "classification",
            element: <IntervalClassification/>
          },
          {
            path: "inversion",
            element: <IntervalInversion/>
          }
        ] 
      },
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
      },
      {
        path: "staff",
        children: [
          {
            path: "trebleClef",
            element: <TrebleClef/>
          },
          {
            path: "bassClef",
            element: <BassClef/>
          },
        ]
      }
    ],
  },
]);