import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice,
  },
});

// reducer라는 것을 쓰게 되어있음
//  상태 와 액션으로 구분함 -> 각각의 타입을 만들어야함 ->RTK가 도와줄것
//  상태 : 데이터
//  액션: 상태를 변경하기위해서 조작하는 함수

// RTK 슬라이스 -> 상태와 액션을 공급하는 하나의 단위로 여러개 있을 수 있고 이안에 상태와 액션이 있음

// 그냥 외워라
// 상태를 위한 타입
export type RootState = ReturnType<typeof store.getState>;
// 액션 타입
export type AppDispatch = typeof store.dispatch;
