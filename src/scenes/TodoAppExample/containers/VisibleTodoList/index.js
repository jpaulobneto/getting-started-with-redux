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

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
