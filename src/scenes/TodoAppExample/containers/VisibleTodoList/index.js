import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleTodo } from '../../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const VisibleTodoList = ({ todos, visibilityFilter, onToggleTodo }) => (
  <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={onToggleTodo} />
);

const mapStateToProps = state => ({
  todos: state.todoApp.todos,
  visibilityFilter: state.todoApp.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleTodoList);
