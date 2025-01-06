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
  <div>
    <ul>
      <li
        v-for="(fruit, index) in fruits"
        :key="index"
        :style="{ color: fruit === 'Apple' ? 'red' : 'green' }"
      >
        {{ index }} - {{ fruit }}
      </li>
    </ul>
  </div>
</template>
<style></style>
