<script>
export default {
  name: "Ex1_5",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<template>
  <p v-show="isShow">조건이 참입니다!</p>
</template>
<style scoped></style>
