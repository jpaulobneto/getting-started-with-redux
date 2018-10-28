import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleTodo } from '../../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'active':
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todoApp.todos, ownProps.filter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
