
require('../css/bootstrap.css');
require('../css/app.css');

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
