import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './configureStore';
import { saveState } from './helpers/localStorage';

import AppContainer from './containers/AppContainer/AppContainer';

import './reset.styl';
import './main.styl';


const store = configureStore();

window.store = store;

store.subscribe(throttle(() => {
    saveState({ test: store.getState().test });
}), 1000);

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    );
};

render(AppContainer);
