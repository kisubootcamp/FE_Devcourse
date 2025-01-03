<script>
export default {
  name: "Ex5",
  data() {
    return {
      isTrue: true,
    };
  },
};
</script>
<template>
  <p v-show="isTrue">조건이 참입니다</p>
</template>
<style scoped></style>
