import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import './01/cra_cls_js/style.css'
import reportWebVitals from './reportWebVitals';
import Wrap from './01/cra_cls_js/Wrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
      <Wrap />
  // </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
