<script setup>
import { computed, ref } from "vue";

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const decrement = () => count.value--;
const increment = () => count.value++;
const reset = () => (count.value = 0);
</script>

<template>
  <div>{{ count }}</div>
  <div>doubleCount {{ doubleCount }}</div>
  <button @click="decrement">감소</button>
  <button @click="reset">리셋</button>
  <button @click="increment">증가</button>
</template>

<style lang="scss" scoped></style>
