// RTK가 Immer라는 라이브러리를 사용함

import { createSlice } from "@reduxjs/toolkit";
//counterSlice 이름은 파일이름과 똑같이 지어주는 게 관례
//매개변수를 넘겨야 함
//name, initialState, reducers (필수)
export const counterSlice = createSlice({
  name: "counterSlice", // 슬라이스 이름(고유한 이름 보통은 파일명)
  initialState: {
    count: 0,
  }, //기본자료형, 배열, 객체, 함수는❌
  reducers: {
    //매개변수에는 항상 initialState를 참조함
    decrement: (state) => {
      //states는 항상 initialState의 최신값을 받아옴
      state.count = state.count - 1;
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  }, //상태를 변경시킬 수 있는 함수
});

//내보내기
export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
