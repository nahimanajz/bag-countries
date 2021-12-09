import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Home from './screens/Home';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  {<App />}
</BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();

// TODO: check from redux or localstorage if use is logged in
