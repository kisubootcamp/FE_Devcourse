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
      {{ category.name }}
      <ul>
        <li v-for="(value, index) in category.items" :key="index">
          {{ value }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
