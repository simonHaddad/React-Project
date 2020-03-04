import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/index.scss';
import { Provider } from 'react-redux';
import store from './Components/Store';

let routes = RoutesModule.routes;

function renderApp() {
    render(
        <Provider store={store}>
            <BrowserRouter children={routes} />
        </Provider>,
        document.getElementById('root')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require('./routes').routes;
        renderApp();
    });
}