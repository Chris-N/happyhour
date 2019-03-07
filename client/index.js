import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App.jsx';

const store = createStore(rootReducer, composeWithDevTools());

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);