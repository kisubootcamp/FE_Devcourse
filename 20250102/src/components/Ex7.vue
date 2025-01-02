<script>
export default {
  name: "Ex7",
  data() {
    return {
      isGreeting: false,
    };
  },
};
</script>
<template>
  <p v-if="isGreeting">Hello</p>
  <p v-else="isGreeting">Goodbye</p>
</template>
<style scoped></style>
