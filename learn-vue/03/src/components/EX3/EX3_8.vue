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
  <p>{{ categories }}</p>
  <ul>
    <template v-for="category in categories">
      <li>{{ category.name }}</li>
      <ul>
        <template v-for="item in category.items">
          <li>{{ item }}</li>
        </template>
      </ul>
    </template>
  </ul>
</template>
<style></style>
