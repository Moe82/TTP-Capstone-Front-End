import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import history from './history';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// React-Router
import { Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router history = {history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
