import { create } from 'zustand';

export const useCounterStore = create<CounterStoreType>((set) => ({
  // 콜백함수로 반환되는 값이 state 및 action이 됨
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(() => ({ count: 0 })),
}));
