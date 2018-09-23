import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CounterExample from '../containers/CounterExample';
import Home from '../Home';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/counter-example" component={CounterExample} />
      </React.Fragment>
    </Router>
  </Provider>
);

export default Root;
