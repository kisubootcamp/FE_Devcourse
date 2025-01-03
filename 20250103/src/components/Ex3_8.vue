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
    <li v-for="categorie in categories">
      <h3>{{ categorie.name }}</h3>
      <li v-for="item in categorie.items">{{ item }}</li>
    </li>
  </ul>
</template>
<style scoped></style>
