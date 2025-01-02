<script>
export default {
  name: "Ex3",
  data() {
    return {
      msg: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <h2>3. HTML 렌더링</h2>
  <p v-html="msg"></p>
</template>

<style scoped></style>
