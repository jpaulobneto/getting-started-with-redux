import { ADD_TODO, TOGGLE_TODO } from './actions';

let currentID = -1;

const nextID = () => {
  currentID += 1;
  return currentID;
};

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: nextID(),
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

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(currentTodo => todo(currentTodo, action));
    default:
      return state;
  }
};

export default todos;
