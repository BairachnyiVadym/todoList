import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from "redux";
import todoApp from "./reducers/todoApp";
import {Provider} from "react-redux";

let store = createStore(todoApp);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

registerServiceWorker();
