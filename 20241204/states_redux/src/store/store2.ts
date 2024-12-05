import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { authSlice } from "./slice/authSlice";

export const store2 = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store2.getState>;

export type AppDispatch = typeof store2.dispatch;
