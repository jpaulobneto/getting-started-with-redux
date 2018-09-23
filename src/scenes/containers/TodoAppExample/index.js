import { connect } from 'react-redux';
import TodoAppExample from '../../TodoAppExample';
import { addTodo, toggleTodo } from '../../TodoAppExample/actions';

const mapStateToProps = state => ({
  todos: state.todoApp.todos,
  visibilityFilter: state.todoApp.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text)),
  onToggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoAppExample);
