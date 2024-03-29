// data/createStore.js

import { combineReducers, createStore } from 'redux';
import reducerRegistry from './reducerRegistry';

const initialState = {}; /* from local storage, server or init state */

// Preserve initial state for not-yet-loaded reducers
const combine = (reducers) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach((item) => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};

const reducer = combine(reducerRegistry.getReducers());
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Replace the store's reducer whenever a new reducer is registered.
reducerRegistry.setChangeListener((reducers) => {
  store.replaceReducer(combine(reducers));
});

export default store;
