import React from 'react';
import {
  Button, Col, Grid, Row,
} from 'react-bootstrap';

const Home = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <header>
          <h1>Getting Started with Redux</h1>
          <h2>Course examples</h2>
        </header>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <main>
          <ol>
            <li>
              Counter:
              {' '}
              <Button>Load</Button>
            </li>
          </ol>
        </main>
      </Col>
    </Row>
  </Grid>
);

export default Home;
