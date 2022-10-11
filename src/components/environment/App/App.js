import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import { useDarkMode } from '../../../hooks/useDarkMode';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Game from '../../pages/Game';
import Snackbar from '../../atoms/Snackbar';
import Nav from '../../organisms/Nav/Nav';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '7em',
          height: '50px',
          color: '#000000',
          border: '1px solid #000000',
          borderRadius: '50px',
          textTransform: 'none',
          ":hover": {
            border: '1px solid #000000'
          }
        },
        
      }
    }
  }
});

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <Snackbar />
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <Game/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
