import { createSlice } from "@reduxjs/toolkit";
//파일 이름과 똑같이 지어주는 게 관례
export const counterSlice = createSlice({
  name: "",
  // initialState는 공급하고 싶은 데이터 (함수x)
  initialState: {
    count: 0,
  },
  // 상태(데이터)를 변경시킬 수 있는 함수 (항상 initialState의 최신값이 참조됨)
  reducers: {
    decrement: (state) => {
      state.count = state.count - 1;
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    // 매개변수 활용하는 방법 (리듀서 함수의 연장선)
    incrementByAmount: (state, action) => {
      // 두 번째 매개변수(외부에서 전달받은 데이터)의 payload 속성값 활용
      state.count += action.payload;
    },
  },
});

export const { decrement, increment, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
