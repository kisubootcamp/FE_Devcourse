<script>
export default {
  name: "EX3_8",
  data() {
    return {
      categories: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        { name: "Vegetables", items: ["Carrot", "Broccoli"] },
      ],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="category in categories" :key="category.name">
      <h3>{{ category.name }}</h3>
      <li v-for="item in category.items" :key="item">
        {{item}}
      </li>
    </li>
  </ul>
</template>
<style scoped></style>
