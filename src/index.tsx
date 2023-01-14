import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App';
import Blog from "./featchers/Blog/Blog";
import Login from "./featchers/Login/Login";
import SignUp from "./featchers/SignUp/SignUp";
import AboutUs from "./featchers/AboutUs/AboutUs";

import './index.css';
import {Provider} from "react-redux";
import {store} from "./bll/store/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<App/>),
    },
    {
        path: "/AboutUs",
        element: (<AboutUs/>),
    },
    {
        path: "/Blog",
        element: (<Blog/>),
    },
    {
        path: "/SignUp",
        element: (<SignUp/>),
    },
    {
        path: "/Login",
        element: (<Login/>),
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
