import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './root-reducer'
import App from './App';
import store from './store'
// import connectedComponent from './App'
import './App.css';

// store.dispatch(getInventoryItems())

const renderApp = () => {ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)};

renderApp()
