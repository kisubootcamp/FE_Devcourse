<script setup>
import { useRouter } from "vue-router";

const router = useRouter(); // 페이지를 이동시킬때 사용
const handleMethod = () => {
  //...
  router.replace("/");
};
</script>
<template>
  <h1>NotFound</h1>
  <button @click="handleMethod">홈으로 돌아가기</button>
</template>
<style scoped></style>
