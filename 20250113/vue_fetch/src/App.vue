<script setup>
import { defineAsyncComponent } from "vue";
import Axios from "./components/Axios.vue";
import Fetch from "./components/Fetch.vue";
// import SuspenseBasic from "./components/SuspenseBasic.vue";

const SuspenseWithComp = defineAsyncComponent(() =>
  import("@/components/SuspenseBasic.vue")
);
</script>
<template>
  <h3>Home</h3>

  <Suspense>
    <SuspenseWithComp />
    <template #fallback>
      <h1>Custom Loading...</h1>
    </template>
  </Suspense>
  <!-- <Axios /> -->
  <!-- <Fetch /> -->
</template>
<style scoped></style>
