<script>
export default {
  name: "Ex1_7",
  data() {
    return {
      isGreeting: true,
    };
  },
};
</script>
<template>
  <p v-if="isGreeting">Hello</p>
  <p v-else-if="!isGreeting">Goodbye</p>
</template>
<style scoped></style>
