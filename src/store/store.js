import { configureStore } from '@reduxjs/toolkit';
import accessReducer from './accessCKSlice';

const store = configureStore({
  reducer: {
    accessCK: accessReducer
  }
});

export default store;
