import { Provider } from 'react-redux';
import store from '../../../store/store';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Game from '../../pages/Game';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let words = {};

fetch('en.json')
  .then((response) => response.json())
  .then((data) => {
      Object.keys(data).filter(word => word.length > 3).forEach(word => {
        words[word] = '';
      })
      console.log(words, '<-- filtered words');
  })

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
