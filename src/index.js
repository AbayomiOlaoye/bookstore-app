import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import safe from './redux/configureStore';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={safe}>
      <App />
    </Provider>
  </React.StrictMode>,
);
