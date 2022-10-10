import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../../store/store';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Game from '../../pages/Game';
import Snackbar from '../../atoms/Snackbar';
import Nav from '../../organisms/Nav/Nav';

const themeObject = {
  palette: {
    mode: 'dark',
  },
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const { palette: { type }} = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      }
    }
    setTheme(updatedTheme)
  }
  return [theme, toggleDarkMode]
}

function App() {
  const [theme, toggleDarkMode] = useDarkMode();
  const themeConfig = createTheme(theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <Snackbar />
        <Nav toggleDarkMode={toggleDarkMode} />
        <Game/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
