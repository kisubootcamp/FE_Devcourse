<script>
import { computed, ref } from "vue";
export default {
  name: "Composition",
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const decrement = () => count.value--;
    const reset = () => (count.value = 0);
    const increment = () => count.value++;
    return {
      count,
      doubleCount,
      decrement,
      reset,
      increment,
    };
  },
};
</script>
<template>
  <h1>count :{{ count }}</h1>
  <h1>Double Count : {{ doubleCount }}</h1>
  <button @click="increment">증가</button>
  <button @click="reset">리셋</button>
  <button @click="decrement">감소</button>
</template>
<style scoped></style>
