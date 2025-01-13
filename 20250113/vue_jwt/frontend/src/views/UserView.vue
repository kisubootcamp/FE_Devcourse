<script setup>
import { axiosInstance } from "@/api/axiosInstance";
import { ref } from "vue";

const data = ref(null);
axiosInstance.get("/user").then((res) => {
  data.value = res.data;
});
</script>
<template>
  <h1>User View</h1>
  <pre>{{ data }}</pre>
</template>
<style scoped></style>
