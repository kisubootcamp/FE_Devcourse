// 상태(데이터)
// 액션(상태를 변경하기 위해 조작하는 함수)

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { counterSlice } from "./slice/counterSlice";

export const store = configureStore({
  //  준비한  slice들을 넣어주는 위치
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// RTK 타입 지정

// 상태를 위한 타입
export type RootSate = ReturnType<typeof store.getState>;

// 액션 타입
export type AppDispatch = typeof store.dispatch;
