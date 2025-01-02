<script>
export default {
  name: "Ex14",
  data() {
    return {
      selectedOpt: "bold",
    };
  },
};
</script>
<template>
  <h2>5. HTML로 출력되는 동적 텍스트와 조건부 렌더링</h2>
  <p v-if="selectedOpt === 'bold'"><strong>텍스트</strong></p>
  <p v-else-if="selectedOpt === 'italic'"><em>텍스트</em></p>
</template>

<style scoped></style>
