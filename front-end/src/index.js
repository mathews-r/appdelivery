import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import UserProvider from './provider/index';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>   
      <App />  
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
