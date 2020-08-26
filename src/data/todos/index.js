const initialState = [];
let notificationId = 0;

const createActionName = name => `app/todos/${name}`;

// selectors
export const selectAllNotifications = state => state.notifications;
export const selectNextNotification = state => state.notifications[0];

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
      return [...state, { message: action.payload, id: notificationId += 1 }];
    case REMOVE_NOTIFICATION:
      return state.slice(1);
    default:
      return state;
  }
}