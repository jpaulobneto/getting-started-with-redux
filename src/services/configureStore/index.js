import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import throttle from 'lodash/throttle';
import reducer from '../../reducer';
import { loadState, saveState } from '../localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducer, persistedState, composeWithDevTools());

  store.subscribe(
    throttle(() => {
      saveState({
        todoApp: {
          todos: store.getState().todoApp.todos,
        },
      });
    }, 1000),
  );

  return store;
};

export default configureStore;
