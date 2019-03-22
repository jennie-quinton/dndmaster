import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './utils/storeProvider';

import Index from './pages/index';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  rootElement,
);
