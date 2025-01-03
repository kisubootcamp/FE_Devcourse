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
  <ul>
    <template v-for="fruit in fruits">
      <li v-if="fruit === 'Apple'" :style="{ color: 'red' }">{{ fruit }}</li>
      <li v-else :style="{ color: 'green' }">{{ fruit }}</li>
    </template>
  </ul>
</template>
<style></style>
