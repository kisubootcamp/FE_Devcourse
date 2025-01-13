<script setup>
import { ref } from "vue";
const posts = ref(null);
const response = await fetch("http://localhost:3000/posts");
const data = await response.json();
posts.value = data;
</script>
<template>
  <h3>Suspense Test</h3>
  <pre>{{ posts }}</pre>
</template>
<style scoped></style>
