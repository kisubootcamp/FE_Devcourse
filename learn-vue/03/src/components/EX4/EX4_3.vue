<script>
export default {
  name: "EX4_3",
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
    <template v-for="category in categories" :key="category.name">
      <li>{{ category.name }}</li>
      <ul>
        <template v-for="item in category.items" :key="category.name">
          <div v-if="typeof item === 'object'">
            <li>{{ item.name }}</li>
            <ul>
              <li v-for="item2 in item.items">{{ item2 }}</li>
            </ul>
          </div>
          <li v-else>{{ item }}</li>
        </template>
      </ul>
    </template>
  </ul>
</template>

<style></style>
