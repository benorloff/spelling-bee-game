import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store/store';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Game from '../../pages/Game';
import Snackbar from '../../atoms/Snackbar';
import Nav from '../../organisms/Nav/Nav';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Snackbar />
        <Nav />
        <Game/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
