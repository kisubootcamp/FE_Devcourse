<script setup>
// 동적세그먼트의 값이 변경 될때
onBeforeRouteUpdate((to, from) => {
  console.log("onBeforeRouteUpdate");
  console.log(to);
  console.log(from);
  if (to.params.id === "2") return false;
});
</script>
<template>
  <h1>Dashboard View</h1>
</template>
<style scoped></style>
