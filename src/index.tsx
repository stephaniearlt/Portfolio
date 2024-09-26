import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // Désactiver le mode strict pour éviter les données en double dans la console
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
