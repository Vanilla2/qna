import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router';
import router from './utils/router';
import Navbar from './components/navbar/Navbar';
import Helmet from "./components/Helmet"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar/>
    <Helmet type = "theme--dark"/>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
