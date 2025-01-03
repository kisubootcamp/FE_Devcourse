<script>
export default {
  name: "Ex1_7",
  data() {
    return {
      isGreeting: false,
    };
  },
};
</script>
<template>
  <div v-if="isGreeting">Hello</div>
  <div v-else>Goodbye</div>
</template>
<style scoped></style>
