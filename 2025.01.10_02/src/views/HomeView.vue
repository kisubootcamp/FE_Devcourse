<script setup>
import { useCountStore } from "@/stores/countStore";

const countStore = useCountStore();
</script>
<template>
  <h1>Home view : {{ countStore.count }}</h1>
  <h1>Home view : {{ countStore.doubleCount }}</h1>
  <button @click="countStore.increment">증가</button>
</template>
<style scoped></style>
