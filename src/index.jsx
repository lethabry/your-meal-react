import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store/index.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
