const initialState = [{name: 'buy milk', id: 999}];
let todoId = 0;

const createActionName = name => `app/todos/${name}`;

// selectors
export const selectAllTodos = state => state.todos;

// actions
export const ADD_TODO = createActionName('ADD_TODO');
export const REMOVE_TODO = createActionName('REMOVE_TODO');

// action creators
export const addTodo = payload => ({ payload, type: ADD_TODO });
export const removeTodo = payload => ({ payload, type: REMOVE_TODO });


// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { name: action.payload, id: todoId += 1 }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

