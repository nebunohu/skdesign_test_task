import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './redux/reducers/root';
import FontStyles from './components/font-styles/font-styles';
import GlobalStyles from './components/global-styles/global-styles';

const enhancers = compose(applyMiddleware(thunk));
export const store = createStore(rootReducer, enhancers)

ReactDOM.render( 
  <Provider store={store}>
    <FontStyles />
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
