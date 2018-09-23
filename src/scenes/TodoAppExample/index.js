import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Grid, Row,
} from 'react-bootstrap';

class TodoApp extends React.Component {
  render() {
    const { todos, onAddTodo } = this.props;

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
                {todos.map(todo => (
                  <li key={todo.id}>{todo.text}</li>
                ))}
              </ul>
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
};

export default TodoApp;
