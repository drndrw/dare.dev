import { rootReducer } from '../reducers';
import { navMiddleware } from '../middleware';
import { createStore, applyMiddleware } from 'redux';

export const reduxStore = createStore(rootReducer, applyMiddleware(navMiddleware));
