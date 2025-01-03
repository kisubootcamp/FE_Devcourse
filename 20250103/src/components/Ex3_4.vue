<script>
export default {
  name: "Ex3_4",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <ul>
    <template v-for="item in items">
      <li v-if="item.inclused('a')">
        {{ item }}
      </li>
    </template>
  </ul>
</template>
<style scoped></style>
