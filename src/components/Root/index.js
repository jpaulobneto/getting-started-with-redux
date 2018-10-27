import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import CounterExample from '../../scenes/containers/CounterExample';
import Home from '../../scenes/Home';
import NotFound from '../../scenes/NotFound';
import TodoAppExample from '../../scenes/TodoAppExample';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter-example" component={CounterExample} />
        <Route path="/todo-app-example/:filter?" component={TodoAppExample} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
