import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const DATA = [
    {id:'item-1', contractAddress: '0xbghh', opValue: 1, describe:'第一项', price: 5},
    {id:'item-2', contractAddress: '0xbghh', opValue: 2, describe:'第二项', price: 10},
];

const Array = [{0: '', 1: ''},];
const Temp = [{0: '', 1: ''},];
const myMap = new Map();
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
      <App tasks={DATA}  Array = {Array} Temp={Temp}
           myMap={myMap}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
