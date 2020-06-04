import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import catsReducer from './reducers/catsReducer.js';
 
const store = createStore(catsReducer)
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
This is the Redux configuration we've seen previously. To implement Thunk, we'll need to also import applyMiddleware from redux and thunk from redux-thunk (package already included in package.json). We pass thunk into applyMiddleware(), and pass that in as the second argument for createStore:

// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer.js';
 
const store = createStore(catsReducer, applyMiddleware(thunk))
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);