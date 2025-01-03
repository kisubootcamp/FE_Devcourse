<script>
export default {
  name: "Lecture2",
  data() {
    return {
      categories: [
        { name: "Fruits", items: ["Apple", "Banana", "Cherry"] },
        { name: "Vegetable", items: ["Carrot", "Tomato", "Lettuce"] },
      ],
    };
  },
};
</script>
<template>
  <!-- 중첩 v-for -->
  <ul>
    <li v-for="(category, index) in categories" :key="index">
      <h3>{{ category.name }}</h3>
      <ul>
        <template v-for="item in category.items">
          <li v-if="item.includes('a')">
            {{ item }}
          </li>
        </template>
      </ul>
    </li>
  </ul>
</template>
<style></style>
