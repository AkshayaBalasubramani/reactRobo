import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import CardList from "./CardList";
// import Card from './Card.js';
// import {robots} from './robots.js'
import App from "./containers/App.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
