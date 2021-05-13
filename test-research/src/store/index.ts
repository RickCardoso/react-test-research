import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers, PreloadedState, Store } from 'redux';
import { contactReducer } from './contact';
import heapMiddleware from './middlewares/heap';

const combinedReducer = combineReducers({
  contact: contactReducer,
});

//TODO: Find right types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reducer = (state: any, action: AnyAction): any => {
  if (action.type === HYDRATE) {
    return {
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combinedReducer(state, action);
  }
};

export const initStore = (preloadedState?: PreloadedState<unknown>): Store => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heapMiddleware),
    preloadedState,
  });
};

export const wrapper = createWrapper(initStore);
