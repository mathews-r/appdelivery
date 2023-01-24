import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Provider from './provider';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
