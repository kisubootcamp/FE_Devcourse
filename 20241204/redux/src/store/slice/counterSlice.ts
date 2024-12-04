import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
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
  },
});

export const { decrement, increment, reset } = counterSlice.actions;
