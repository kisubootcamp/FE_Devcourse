import { create } from "zustand";

// create는 store 생성해서 커스텀 훅 반환하는 함수 (매개변수로 콜백함수 전달받음)
// 콜백함수에서 전달되는, create함수에서 반환되는 값이 상태 및 액션이 됨(보통 객체로 전달)
export const useCountStore = create<CounterStoreType>((set) => ({
  count: 0,
  //useState 문법과 유사
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
