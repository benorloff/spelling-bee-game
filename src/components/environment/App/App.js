import { Provider } from 'react-redux';
import store from '../../../store/store';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Game from '../../pages/Game';

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
        <Game />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
