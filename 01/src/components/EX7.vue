<script>
export default {
  name: "EX7",
  data() {
    return {
      isGreeting: false,
    };
  },
};
</script>
<template>
  <div v-if="isGreeting">Hello</div>
  <div v-else="isGreeting">Goodbye</div>
</template>
<style scoped></style>
