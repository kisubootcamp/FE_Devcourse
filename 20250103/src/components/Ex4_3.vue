<script>
export default {
  name: "Ex4_3",
  data() {
    return {
      categories: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        {
          name: "Vegetables",
          items: [
            "Carrot",
            "Broccoli",
            { name: "Leafy Vegetables", items: ["Spinach", "Lettuce"] },
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(categorie, index) in categories" :key="index">
      <h1>{{ categorie.name }}</h1>
      <ul>
        <li v-for="(item) in categorie.items">
          <li >{{ item }}</li>
          <ul>
            <li v-for="i in item.items">{{ i }}</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
