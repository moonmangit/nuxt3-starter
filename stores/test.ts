import { defineStore } from "pinia";

export const useTestStore = defineStore("test", () => {
  const state = ref({
    count: 0,
  });

  function increment() {
    state.value.count++;
  }

  function $reset() {
    state.value.count = 0;
  }

  return {
    state,
    increment,
  };
});
