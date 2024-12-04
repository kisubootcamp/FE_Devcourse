import { create } from "zustand";
// 커스텀 훅 모습으로 사용

export const useCounterStore = create<CounterStoreType>((set) => ({ 
  count: 0
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
  reset: () => set({count: 0}),
}));
// 매배변수로 콜백함수를 전달받음 = 이게 상태값이 됨, 보통 객체 형태를 반환환
