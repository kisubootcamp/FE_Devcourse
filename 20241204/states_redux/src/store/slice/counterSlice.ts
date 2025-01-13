// 개발자가
// 불변성을 유지하려고 노력하지 않아도 자동으로 불변성을 지켜주는 라이브러리
import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
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
    incrementByAmount: (state, action) => {
      state.count += action.payload.cccc;
    },
  },
});

export const { decrement, increment, reset, incrementByAmount } =
  counterSlice.actions;
