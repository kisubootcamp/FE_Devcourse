<script>
export default {
  name: 'Ex1_7',
  data() {
    return {
      isGreeting: true,
    };
  },
};
</script>
<template>
  <h2>Lv1. 7번</h2>

  <p v-if="isGreeting">Hello</p>
  <p v-else>GoodBye</p>

  <hr />
</template>
<style scoped>
  
</style>