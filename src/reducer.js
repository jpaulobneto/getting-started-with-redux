import { combineReducers } from 'redux';
import counter from './scenes/CounterExample/reducer';
import todoApp from './scenes/TodoAppExample/reducer';

export default combineReducers({
  counter,
  todoApp,
});
