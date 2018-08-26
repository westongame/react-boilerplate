import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';
import { loadState } from './helpers/localStorage';

export default function configureStore() {
    const persistedState = loadState();

    return createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
