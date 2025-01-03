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
        <li v-for="item in category.items" :key="item">
          <template v-if="typeof item === 'string'">{{ item }}</template>
          <template v-else>
            {{ item.name }}
            <ul>
              <li v-for="item in item.items" :key="item">
                {{ item }}
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
