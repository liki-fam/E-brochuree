import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional: global styles
import App from './App';
import reportWebVitals from './reportWebVitals';  // Optional, for performance measuring

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: measure performance in your app
reportWebVitals();