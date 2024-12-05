import { create } from "zustand";

interface CounterStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterStoreType>((set) => ({
  count: 0,

  // useState의 상태 업데이트 함수와 유사하다.
  //   const [state,set]= useState({count:0});
  // increment = ()=> {
  //     set((state)=>{...state,count: state.count+1})
  // }
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
