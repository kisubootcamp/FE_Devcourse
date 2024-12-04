import { create } from "zustand";

export const useCounterStore = create<CounterStoreType>((set) => ({
  // 상태 정의
  count: 0,
  // 액션 정의
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
