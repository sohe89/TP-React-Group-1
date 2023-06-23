import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/reducer/store';
import {BrowserRouter}  from 'react-router-dom';
/*Nuevas importaciones*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { getTotals } from './redux/reducer/cartSlice';


store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>

  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
 
  </React.StrictMode>

);


