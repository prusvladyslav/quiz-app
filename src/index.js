import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom';


import './style.css';
import Home from './components/Home'
ReactDOM.render(
  <React.StrictMode>
     <div className="app-body">
    <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

