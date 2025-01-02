<!-- 1 -->
<script>
export default {
  name: "App",
  data() {
    return {
      isTrue: false,
    };
  },
};
</script>
<template>
  <button @click="isTrue = !isTrue">버튼</button>
  <h1 v-if="isTrue">조건이 참입니다!</h1>
</template>
<style scoped></style>
