import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Routes from './scenes/Routes';
import configureStore from './services/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
