import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';

// check ke redux k state h ke nhi 
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}> 
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
