import { createSlice } from '@reduxjs/toolkit';

let coinSlice = createSlice({
  name: 'coin',
  initialState: null,
  reducers: {
    setCoin: (state, action) => action.payload,
  },
});

export const { setCoin } = coinSlice.actions;
export default coinSlice.reducer;
