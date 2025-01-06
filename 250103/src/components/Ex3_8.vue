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
    <li v-for="(category, key) in categories" :key>
      {{ category.name }}
      <ul>
        <li v-for="item in category.items">
          {{ item }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
