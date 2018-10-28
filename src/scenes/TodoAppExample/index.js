import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import AddTodo from './containers/AddTodo';
import Footer from './components/Footer';
import VisibleTodoList from './containers/VisibleTodoList';

const TodoApp = ({ match }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <header>
          <h1>TodoApp Example</h1>
        </header>
        <main>
          <AddTodo />
          <VisibleTodoList filter={match.params.filter || 'all'} />
          <Footer />
        </main>
      </Col>
    </Row>
  </Grid>
);

export default TodoApp;
