import { Analytics } from '@vercel/analytics/react';
import './portfolio.scss';
import Header from './layouts/Header/header';

function Portfolio() {
  return (
    <>
      <Analytics debug = { false }/>
      <Header/>
    </>
  );
}

export default Portfolio;
