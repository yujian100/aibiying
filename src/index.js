import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"


import 'normalize.css'
import './asset/css/index.less'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={<h3>加载中</h3>}>
                <App />
            </Suspense>
        </Provider>

    </BrowserRouter>
);
