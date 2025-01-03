<script>
export default {
  name: "EX3_7",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>
<template>
  <template v-for="fruit in fruits">
    <h3 :style="{ color: fruit === 'Apple' ? 'red' : 'green' }">{{ fruit }}</h3>
  </template>
</template>
<style scoped></style>
