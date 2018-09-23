import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

const CounterExample = ({ counter, onClick }) => (
  <Grid>
    <Row>
      <Col xs={12} onClick={onClick}>
        <h1>{counter}</h1>
      </Col>
    </Row>
  </Grid>
);

export default CounterExample;
