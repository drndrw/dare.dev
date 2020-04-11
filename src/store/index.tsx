import { rootReducer } from '../reducers';
import { createStore } from 'redux';

export const reduxStore = createStore(rootReducer);
