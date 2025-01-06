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
  <div>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category.name }}
        <ul>
          <li v-for="(item, index) in category.items" :key="index">
            {{ item.name ? item.name : item }}
            <ul v-if="item.items">
              <li v-for="(subItem, index) in item.items" :key="index">
                {{ subItem }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style></style>
