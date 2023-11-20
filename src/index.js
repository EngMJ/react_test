import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RouterTest from "./pages/test";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="test" element={<RouterTest/>}>
                            <Route
                                index
                                element={
                                    <main style={{padding: "1rem"}}>
                                        <p>当前路由为/test/, 设置index路由不然啥都不显示</p>
                                    </main>
                                }
                            />
                            <Route path=":id" element={<RouterTest/>}></Route>
                        </Route>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
