import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';

const initialState = {};
const middleware = [thunk, logger];

const composedEnhancers = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;