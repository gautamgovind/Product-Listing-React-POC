import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store';
import { GlobalStyles } from './index.style';

const rootElm = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles />
        <App />
    </Provider>,rootElm
);