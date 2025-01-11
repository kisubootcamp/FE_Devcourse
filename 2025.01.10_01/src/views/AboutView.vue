<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

// 라우트를 이동하기전
onBeforeRouteLeave((to, from) => {
  console.log("라우트를 이동하기 전");
  console.log(to);
  console.log(from);
  if (text.value) {
    const answer = window.confirm("정말 떠나시겠습니까?");
    if (answer) {
      return true;
    } else {
      return false;
    }
  }
  return false;
});
</script>
<template>
  <h1>About</h1>
  <div
    style="height: 5000px; background: linear-gradient(45deg, #000, yellow)"
  ></div>
  <textarea v-model="text"></textarea>
  <div id="about">about bottom</div>
  <div
    style="height: 5000px; background: linear-gradient(45deg, #000, yellow)"
  ></div>
</template>
<style scoped></style>
