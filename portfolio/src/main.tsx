import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import Portfolio from './portfolio.tsx';
import { Provider } from 'react-redux';
import storeApp from './redux/store/strore';
import './index.scss';

const root: Root = createRoot(document.getElementsByClassName('portfolio')[0]);

root.render(
  <React.StrictMode>
    <Provider store={storeApp}>
      <Portfolio />
    </Provider>
  </React.StrictMode>,
);
