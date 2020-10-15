import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';
import theme from './theme';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <StylesProvider injectFirst>
            <App />
          </StylesProvider>
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
