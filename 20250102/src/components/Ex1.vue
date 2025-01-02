<script>
export default {
  name: "Ex1",
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>
<template>
  <h2>1. 조건부 렌더링</h2>
  <p v-if="isClicked">조건이 참입니다!</p>
</template>

<style scoped></style>
