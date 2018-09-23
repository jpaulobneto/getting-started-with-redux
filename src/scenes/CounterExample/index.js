import React from 'react';
import {
  Button, Col, Grid, Row,
} from 'react-bootstrap';

const CounterExample = ({ value, onIncrement, onDecrement }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h1>{value}</h1>
        <Button onClick={onIncrement}>+</Button>
        <Button onClick={onDecrement}>-</Button>
      </Col>
    </Row>
  </Grid>
);

export default CounterExample;
