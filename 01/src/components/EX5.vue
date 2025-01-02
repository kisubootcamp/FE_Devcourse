<script>
export default {
  name: "EX5",
  data() {
    return {
      message: "조건이 참입니다!",
    };
  },
};
</script>
<template>
  <h1 v-show="true">{{ message }}</h1>
  <div v-show="false">{{ message }}</div>
</template>
<style scoped></style>
