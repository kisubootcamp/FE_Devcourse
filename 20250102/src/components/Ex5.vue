<script>
export default {
  name: "Ex5",
  data() {
    return {
      message: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <h2>5. 조건부 렌더링</h2>
  <p v-show="true">조건이 참입니다!</p>
</template>

<style scoped></style>
