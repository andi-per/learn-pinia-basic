import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
    doubleCount: (state) => state.count * 2,
    dividedByNumber: (state) => (number) => state.count / number,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementByNumber(number) {
      this.count += number;
    },
  },
});
