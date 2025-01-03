<script>
export default {
  name: "Ex3",
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
    <li v-for="(category, index) in categories" :key="index">
      {{ category.name }}
      <ul>
        <li v-for="(item, index) in category.items" :key="index">
          {{ item.name ?? item }}
          <ul>
            <li v-for="(item2, index2) in item.items" :key="index2">
              {{ item2 }}
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
