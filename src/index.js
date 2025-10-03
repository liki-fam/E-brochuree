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
body {
  overflow-x: hidden; /* Optional: hides side-scroll */
  overflow-y: scroll; /* Forces vertical scroll */
  -webkit-overflow-scrolling: touch; /* Smooth iOS scrolling */
}
// Optional: measure performance in your app

reportWebVitals();
