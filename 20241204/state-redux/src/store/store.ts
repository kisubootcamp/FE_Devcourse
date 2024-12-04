//'슬라이스': 상태와 액션을 공급하는 하나의 단위
//상태(데이터)
//액션(상태를 변경하기 위해서 조작하는 함수)
//이 두 타입을 각각 만들어 줘야 됨 => 이걸 도와주는 것이 RTK

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";

//store 정의
export const store = configureStore({
  //내부적으로 reducer라는 어떠한 내용을 받게 되어있음
  reducer: {
    //탑재
    //키값 내맘
    counter: counterSlice.reducer,
  },
});

//!! 공식마냥 외우기
//상태를 위한 타입
export type RootState = ReturnType<typeof store.getState>;
//액션 타입
export type AppDispatch = typeof store.dispatch;
