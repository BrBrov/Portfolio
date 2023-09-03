import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import Portfolio from './portfolio.tsx';
import './index.scss';

const root: Root = createRoot(document.getElementsByClassName('portfolio')[0]);

root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
