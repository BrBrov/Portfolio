import { Analytics } from '@vercel/analytics/react';
import './portfolio.scss';
import './modules/background/bground.tsx';
import Bground from './modules/background/bground.tsx';
import CV from './modules/cv/cv.tsx';

function Portfolio() {
  return (
    <>
      <Analytics debug = { false }/>
      <Bground />
      <CV />
    </>
  );
}

export default Portfolio;
