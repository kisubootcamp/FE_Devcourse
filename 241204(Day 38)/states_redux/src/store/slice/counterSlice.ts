import { createSlice } from "@reduxjs/toolkit";
// counterSlice라는 이름은 보통 파일이름과 똑같이 지어주는 것이 관례
// 아래가 기본 형태라고 생각 하면 됨
// Immer 라이브러리는 불변성을 유지할 때 사용하는 라이브러리
// RTK에 기본적으로 내장되어 있는 라이브러리이다
// 하지만 사용하는 것을 권장하지 않음
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    decrement: (state) => {
      // 원래는 불변성을 유지하기 위해 {...state.count} 이런식으로 해야 하지만
      // 간편하게 이런 식으로 작성 가능
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

export default counterSlice.reducer;
