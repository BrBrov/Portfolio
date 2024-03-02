import { Analytics } from '@vercel/analytics/react';
import './portfolio.scss';
import './modules/background/bground.tsx';

function Portfolio() {
  return (
    <>
      <Analytics debug = { false }/>
      <span>Portfolio</span>
    </>
  );
}

export default Portfolio;
