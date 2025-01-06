<script>
export default {
  name: "Ex8",
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
    <template v-for="(category, index) in categories" :key="index">
      <h1>{{ category.name }}</h1>
      <ul>
        <li v-for="(item, index) in category.items" :key="index">
          <h2>{{ item }}</h2>
        </li>
      </ul>
    </template>
  </div>
</template>
<style scoped></style>
