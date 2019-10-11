import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import graphQL from '../middleware/graphQL';
import api from '../middleware/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(graphQL, api, thunk),
));

export default store;
