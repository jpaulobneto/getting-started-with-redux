import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import VisibleTodoList from './containers/VisibleTodoList';

const TodoApp = ({ onAddTodo }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <header>
          <h1>TodoApp Example</h1>
        </header>
        <main>
          <AddTodo onAddClick={onAddTodo} />
          <VisibleTodoList />
          <Footer />
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
  onAddTodo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);
