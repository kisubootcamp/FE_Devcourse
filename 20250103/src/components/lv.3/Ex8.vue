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
        <template v-for="(item, index) in category.items">
          <h2>{{ item }}</h2>
        </template>
      </ul>
    </template>
  </div>
</template>
<style scoped></style>
