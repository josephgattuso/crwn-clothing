// see https://www.npmjs.com/package/redux
// see https://www.npmjs.com/package/redux-logger
// see https://www.npmjs.com/package/react-redux
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
