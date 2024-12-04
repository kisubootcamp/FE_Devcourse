import { create } from "zustand";

export const useCountStore = create<CounterStoreType>((set) => ({
  count: 0,
  plus: () => set((state) => ({ count: state.count + 1 })),
  minus: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
