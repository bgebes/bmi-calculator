import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BMIContextProvider from './contexts/BMIContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BMIContextProvider>
    <App />
  </BMIContextProvider>
);
