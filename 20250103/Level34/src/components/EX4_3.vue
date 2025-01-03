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
    <li v-for="(category, index) in categories" :key="index">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="item in category.items" :key="item">
          <template v-if="typeof item === 'string'">
            <h3>{{ item }}</h3>
          </template>
          <template v-else>
            <h3>{{ item.name }}</h3>
            <ul>
              <li v-for="subItem in item.items">
                <h3>{{ subItem }}</h3>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
