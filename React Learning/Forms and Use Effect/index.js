import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import List from './components/List';
import Scooter from './components/Scooter';
import reportWebVitals from './reportWebVitals';
import Car from './components/Car';
import Object from './components/Object';
import State from './components/State';
import Timer from './components/Timer';
import Forms from './components/Forms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <State/>
    <Car/>
    <Scooter/>
    <Object/> 
    <List/>
    <Timer/>*/}
    <Forms/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();