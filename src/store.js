import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './store/coinSlice';
import loginCKReducer from './store/loginCKSlice';

const store = configureStore({
  reducer: {
    coin: coinReducer,
    loginCK: loginCKReducer
  }
});

export default store;
