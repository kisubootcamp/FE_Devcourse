<script setup>
import { useCountStore } from "@/stores/countStore";
import { storeToRefs } from "pinia";

const countStore = useCountStore();
const { count, doubleCount } = storeToRefs(countStore);
const { increment } = countStore;
</script>
<template>
  <h1>about view : {{ count }}</h1>
  <h1>about view : {{ doubleCount }}</h1>
  <button @click="increment()">증가</button>
</template>
<style scoped></style>
