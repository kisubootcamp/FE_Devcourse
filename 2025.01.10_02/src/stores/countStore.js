import { defineStore } from "pinia";
import { compile, computed, ref } from "vue";

// setup 스토어 방식식
// vue3 setup hook을 사용하는 문법과 같음
export const useCountStore = defineStore("countStore", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const increment = () => count.value++;
  return {
    count,
    increment,
    doubleCount,
  };
});
