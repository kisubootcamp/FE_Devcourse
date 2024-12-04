// slice를 만드는 기본 문법
//   name: "", initialState: {}, reducers: {}, 가  매개변수로 꼭 들어가야함
// RTK가 사용할 수 있는 것인데 Imer라는 라이브러리는 불변성을 유지할때 사용하는 것 :  but 비권장함
// 상태의 불변성...? 그게 뭐당가...

import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice", //보통은 파일이름으로 그대로 지어줌
  initialState: {
    count: 0,
  }, //내가 공급하고 싶은 데이터(함수X)
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
  }, //상태를 변경시킬 수 있는 함수를 넣음, 여기에는 state 값이 따라오는데 initialState의 최신값을 받아옴
});

// 1개의 store 안에 slice를 채워넣는것임 -> 이렇게 만들어진 store를 컴포넌트에 제공하는 것임

// 값을 바꾸고 싶을때 값을 재할당하면됨으로 이해하면 redux가 조금 쉬울수도..? 거짓말....

// 내보내기
export const { decrement, increment, reset, incrementByAmount } =
  counterSlice.actions; // actions라는 속성으로 비구조할당해서 값을 가져와 내보낼수 있다다
export default counterSlice.reducer;
