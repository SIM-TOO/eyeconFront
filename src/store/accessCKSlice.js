import { createSlice } from '@reduxjs/toolkit';

let accessCKSlice = createSlice({
  name: 'accessCK',
  initialState: false,
  reducers: {
    setAccessCK: (state, action) => action.payload,
  },
});

export const { setAccessCK } = accessCKSlice.actions;
export default accessCKSlice.reducer;
