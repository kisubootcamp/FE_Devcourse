import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
//상태를 위한 타입
export type RootState = ReturnType<typeof store.getState>;
//액션을 위한 타입
export type AppDispatch = typeof store.dispatch;
