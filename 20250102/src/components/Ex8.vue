<script>
export default {
  name: "Ex8",
  data() {
    return {
      isGreeting: false,
    };
  },
};
</script>
<template>
  <h2>8. 동적 조건부 렌더링</h2>
  <p v-if="isGreeting">Hello</p>
  <p v-else>Goodbye</p>
</template>

<style scoped></style>
