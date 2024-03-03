import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import Portfolio from './portfolio.tsx';
import './index.scss';
import ContextApp from './context/context.ts';
import context from './context/context-init.ts';

const root: Root = createRoot(document.getElementsByClassName('portfolio')[0]);

root.render(
  <React.StrictMode>
    <ContextApp.Provider value={context}>
      <Portfolio />
    </ContextApp.Provider>
  </React.StrictMode>,
);
