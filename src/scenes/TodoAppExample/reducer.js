import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO } from './actions';

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.payload.id) return state;

      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(currentTodo => todo(currentTodo, action));
    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
