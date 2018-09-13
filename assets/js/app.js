
require('../css/bootstrap.css');
require('../css/app.css');

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import Main from './components/Layout/index'
import store from './components/store'

const history = createBrowserHistory();

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Main/>
        </Router>
    </Provider>
), document.getElementById('root'));
