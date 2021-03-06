import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Page/Router';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme ,MuiThemeProvider } from '@material-ui/core/styles';
import "./assets/style.scss"

const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main:"#1d1e21",
        contrastText:"#222",
      },
      secondary: {
        main: '#1d1e21',
        contrastText:"#222",
      },
    },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><Router /></MuiThemeProvider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
