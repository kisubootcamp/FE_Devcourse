<script>
export default {
  name: "Ex3_7",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>
<template>
  <p
    v-for="(value, index) in fruits"
    :key="index"
    :style="{ color: value === 'Apple' ? 'red' : 'green' }"
  >
    {{ value }}
  </p>
</template>
<style scoped></style>
