// 슬라이스 기본 형태

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // store는 name, initialState,reducer를  가지고 있다.
  name: "counterSlice", // slice를 구분하는 고유한 이름
  initialState: { count: 0 }, // 공급하고 싶은 데이터(함수x , 기본자료형, 배열, 객체)
  reducers: {
    //데이터 상태를 변경시킬 수 있는 함수
    // 함수의 매개변수로  initialState를 받을 수 있다.

    decrement: (state) => {
      // Redux는 Immer라는 라이브러리에 의해 useState의 불변성을 지키지 않아도된다.
      // 상태값을 변경할때 값을 단순히 재할당하면 되어 단순하다.
      state.count = state.count - 1;
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    // useReducer에서 reducer 함수의 연장선
    // 외부에서 전달받은 데이터는 payload로 전달받기
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// slice 자체를 내보내는 코드
export default counterSlice.reducer;

// 액션함수들을 내보내는 코드
export const { decrement, increment, reset, incrementByAmount } =
  counterSlice.actions;
