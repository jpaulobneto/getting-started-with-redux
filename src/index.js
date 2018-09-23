import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Routes from './scenes/Routes';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
