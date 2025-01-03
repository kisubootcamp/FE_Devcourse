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
  <div>
    <h1 v-for="(category, index) in categories" :key="index">
      {{ category.name }}
      <ul>
        <li v-for="(item, itemIndex) in category.items" :key="itemIndex">
          {{ item }}
        </li>
      </ul>
    </h1>
  </div>
</template>
<style scoped></style>
