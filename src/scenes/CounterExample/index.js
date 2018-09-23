import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

const CounterExample = ({ counter }) => (
  <Grid>
    <Row>
      <Col xs={12}>{counter}</Col>
    </Row>
  </Grid>
);

export default CounterExample;
