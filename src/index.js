import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './components/Root';
import configureStore from './services/configureStore';
import registerServiceWorker from './services/registerServiceWorker';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
