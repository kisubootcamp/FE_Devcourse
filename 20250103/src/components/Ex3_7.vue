<script>
export default {
  name: "Ex3_6",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>
<template>
  <ul>
    <template v-for="(val, index) in fruits">
      <li :style="{ color: val === 'Apple' ? 'red' : 'green' }">
        {{ val }}
      </li>
    </template>
  </ul>
</template>
<style scoped></style>
