import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((res) => setTimeout(res, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

// export const useCounterStore = create((set) => ({
//   count: 0,
//   increment: () => {
//     set({ count: +1 });
//   },
//   decrement: () => {
//     set({ count: -1 });
//   },
// }));
