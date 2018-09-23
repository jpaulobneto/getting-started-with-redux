import React from 'react';
import PropTypes from 'prop-types';
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

CounterExample.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default CounterExample;
