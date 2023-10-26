import { createSlice } from '@reduxjs/toolkit';

let loginCKSlice = createSlice({
  name: 'loginCOOKI',
  initialState: null,
  reducers: {
    setLoginCK: (state, action) => action.payload,
  },
});

export const { setLoginCK } = loginCKSlice.actions;
export default loginCKSlice.reducer;
