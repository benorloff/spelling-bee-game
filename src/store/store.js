import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { gameReducer } from './reducers/gameReducer';

const store = configureStore({ 
    reducer: gameReducer, 
    middleware: [thunk],
});

export default store;

