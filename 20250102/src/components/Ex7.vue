<script>
export default {
  name: "Ex7",
  data() {
    return {
      isGreeting: true,
    };
  },
};
</script>
<template>
  <h1 v-if="isGreeting">hello</h1>
  <h1 v-else-if="isGreeting">goodbye</h1>
</template>
<style scoped></style>
