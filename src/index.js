import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/noto-sans"; 
import "@fontsource/noto-sans/400.css"; 
import "@fontsource/noto-sans/500.css"; 
import "@fontsource/noto-sans/600.css"; 
import "@fontsource/noto-sans/700.css"; 
import "@fontsource/noto-sans/800.css"; 
import "@fontsource/noto-sans/900.css"; 


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
