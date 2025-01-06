<script>
export default {
  name: "Ex3_8",
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
    <li v-for="(category, index) in categories" :key="index">
      <h2>{{ category.name }}</h2>
      <ul>
        <li v-for="(item, index) in category.items" :key="index">
          {{ item }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<style></style>
