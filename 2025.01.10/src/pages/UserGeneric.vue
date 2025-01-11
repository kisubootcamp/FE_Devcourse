<script setup>
import { useRoute } from "vue-router";

const route = useRoute(); //세그먼트나 매개변수를 받아올 떄 사용
const { afterUser } = route.params;
console.log(route);
</script>
<template>
  <h1>UserGeneric - {{ afterUser }}</h1>
</template>
<style scoped></style>
