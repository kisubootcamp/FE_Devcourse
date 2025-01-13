<script setup>
import Count from "./components/Count.vue";

const count = ref(0);
provide("provideCount", count);
</script>

<template>
  <Count :count="count" />
</template>

<style lang="scss" scoped></style>
