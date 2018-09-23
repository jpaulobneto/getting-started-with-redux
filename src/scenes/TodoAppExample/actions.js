export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
});

export default {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
};
