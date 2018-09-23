import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Grid, Row,
} from 'react-bootstrap';
import FilterLink from './containers/FilterLink';

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
class TodoApp extends React.Component {
  render() {
    const {
      todos, visibilityFilter, onAddTodo, onToggleTodo,
    } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <header>
              <h1>TodoApp Example</h1>
            </header>
            <main>
              <input
                ref={(node) => {
                  this.input = node;
                }}
              />
              <Button bsStyle="primary" onClick={() => onAddTodo(this.input.value)}>
                Add todo
              </Button>
              <ul>
                {visibleTodos.map(todo => (
                  <li
                    key={todo.id}
                    onClick={() => onToggleTodo(todo.id)}
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                  >
                    {todo.text}
                  </li>
                ))}
              </ul>
              <p>
                Show:
                {' '}
                <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
                  All
                </FilterLink>
                {' '}
                <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
                  Active
                </FilterLink>
                {' '}
                <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>
                  Completed
                </FilterLink>
              </p>
            </main>
          </Col>
        </Row>
      </Grid>
    );
  }
}

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoApp;
