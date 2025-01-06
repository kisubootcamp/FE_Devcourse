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
    <li v-for="(category, index) in categories" :key="index">
      <span>{{ category.name }}</span>
      <ul>
        <li v-for="(value, index) in category.items" :key="index">
          <p v-if="typeof value === 'string'">{{ value }}</p>
          <p v-else>{{ value.name }}</p>
          <ul v-if="value.items">
            <li v-for="(value, index) in value.items" :key="index">
              {{ value }}
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
