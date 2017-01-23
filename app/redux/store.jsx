import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './index';

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

export default store;
