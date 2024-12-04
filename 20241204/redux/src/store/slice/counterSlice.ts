// Immer 라이브러리가 있다. 불변성 유지

import { createSlice } from "@reduxjs/toolkit/react";
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { count: 0 },
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
      state.count += action.payload;
    },
  },
});

export default counterSlice.reducer;
// 액션은 따로 내보내줘야한다.
// reducer에있는 애들 가져올수있다.
export const { decrement, increment, reset, incrementByAmount } =
  counterSlice.actions;
