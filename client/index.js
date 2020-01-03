import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './utils/storeProvider';

import Index from './routes/index';
import './sass/base.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  rootElement,
);
