import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    plus: (state) => {
      state.count = state.count + 1;
    },
    minus: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    plusByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { minus, plus, reset } = counterSlice.actions;
export default counterSlice.reducer;
