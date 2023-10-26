import { configureStore } from '@reduxjs/toolkit';
import loginCKReducer from './store/loginCKSlice';

const store = configureStore({
  reducer: {
    loginCK: loginCKReducer
  }
});

export default store;
