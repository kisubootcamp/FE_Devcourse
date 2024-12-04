// '슬라이스' 상태와 액션을 담당하는 하나의 단위?
// -> 여러개 있을 수 있다.

// 리덕스
// 상태(데이터)
// 액션(상태를 변경하기 위해서 조작하는 함수)

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { authSlice } from "./slice/authSlice";
export const store = configureStore({
  reducer: {
    // 슬라이스 들어오는 자리
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

//타입을 잡아줘야한다.

// 상태를 위한 타입
export type RootState = ReturnType<typeof store.getState>;
// 액션 타입
export type AppDispatch = typeof store.dispatch;
