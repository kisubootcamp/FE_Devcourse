<script setup>
import { computed, ref } from "vue";
const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const decrement = () => count.value--;
const reset = () => (count.value = 0);
const increment = () => count.value++;
</script>
<template>
  <h1>count :{{ count }}</h1>
  <h1>Double Count : {{ doubleCount }}</h1>
  <button @click="increment">증가</button>
  <button @click="reset">리셋</button>
  <button @click="decrement">감소</button>
</template>
<style scoped></style>
