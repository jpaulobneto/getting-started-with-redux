import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

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

const TodoApp = ({
  todos, visibilityFilter, onAddTodo, onToggleTodo, onFilterClick,
}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <header>
          <h1>TodoApp Example</h1>
        </header>
        <main>
          <AddTodo onAddClick={onAddTodo} />
          <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={onToggleTodo} />
          <Footer visibilityFilter={visibilityFilter} onFilterClick={onFilterClick} />
        </main>
      </Col>
    </Row>
  </Grid>
);

const mapStateToProps = state => ({
  todos: state.todoApp.todos,
  visibilityFilter: state.todoApp.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text)),
  onFilterClick: filter => dispatch(setVisibilityFilter(filter)),
  onToggleTodo: id => dispatch(toggleTodo(id)),
});

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);
