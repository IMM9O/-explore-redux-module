// data/notifications/index.js

import reducerRegistry from '../reducerRegistry';

const initialState = [];
let notificationId = 0;

const reducerName = 'notifications';

const createActionName = name => `app/${reducerName}/${name}`;

// selectors
export const selectAllNotifications = state => state[reducerName];
export const selectNextNotification = state => state[reducerName][0];

// actions
export const ADD_NOTIFICATION = createActionName('ADD_NOTIFICATION');
export const REMOVE_NOTIFICATION = createActionName('REMOVE_NOTIFICATION');

// action creators
export const addNotification = payload => ({ payload, type: ADD_NOTIFICATION });
export const removeNotification = () => ({ type: REMOVE_NOTIFICATION });


// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [{ message: action.payload, id: notificationId += 1 }, ...state];
    case REMOVE_NOTIFICATION:
      return state.slice(1);
    default:
      return state;
  }
}

reducerRegistry.register(reducerName, reducer);