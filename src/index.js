import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './containers/theme'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App appTitle='1. Cast List' />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

