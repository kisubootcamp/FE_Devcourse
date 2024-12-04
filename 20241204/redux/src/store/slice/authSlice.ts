import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  age: number;
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState: { user: null as User | null, isLoggedIn: false },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
