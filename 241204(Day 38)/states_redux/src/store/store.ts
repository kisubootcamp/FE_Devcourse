// 슬라이스 : 상태와 액션을 공급하는 한 개의 단위, 하나의 컨텍스트 같은 개념
// 슬라이스는 여러 개 있을 수 있고
// 슬라이스 안에 상태와 액션이 정의되어야 함
// 상태(데이터)
// 액션(상태를 변경하기 위해서 조작하는 함수)

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// 상태를 위한 타입
export type RootState = ReturnType<typeof store.getState>;
// 액션을 위한 타입
export type AppDispatch = typeof store.dispatch;
