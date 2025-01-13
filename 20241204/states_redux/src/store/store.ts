// '슬라이스' -> 여러 개 있을 수 있음
// 상태(데이터)
// 액션(상태를 변경하기 위해서 조작하는 함수)
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import authSlice from "./slice/authSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice,
  },
});

// 상태를 위한 타입
export type RootState = ReturnType<typeof store.getState>;
// 액션 타입
export type AppDispatch = typeof store.dispatch;
