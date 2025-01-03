<script>
export default {
  name: "Ex1",
  data() {
    return {
      isClicked: "true",
    };
  },
};
</script>
<template>
  <button onclick="">버튼</button>
  <h1 v-if="isClicked">조건이 참입니다!</h1>
</template>
<style scoped></style>
