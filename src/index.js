import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from "redux";
import todos from "./reducers/todos";
import {Provider} from "react-redux";

let store = createStore(todos);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

registerServiceWorker();
