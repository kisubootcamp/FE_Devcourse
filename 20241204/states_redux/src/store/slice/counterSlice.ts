import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  // const 변수명은 파일명과 동일하게 짓는게 관용적
  name: "counterSlice",
  initialState: { count: 0 },
  reducers: {
    decrement: (state) => {
      state.count - 1;
    },
    increment: (state) => {
      state.count + 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { decrement, increment, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
