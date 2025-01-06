<script>
export default {
  name: "EX3_3",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(fruit, index) in fruits.filter((fruit) => fruit.includes('a'))"
        :key="index"
      >
        {{ index }} - {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<style></style>
