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
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="(item, index) in category.items" :key="index">
          <template v-if="typeof item === 'object'">
            {{ item.name }}
            <ul>
              <li v-for="(subItem, subIndex) in item.items" :key="subIndex">
                {{ subItem }}
              </li>
            </ul>
          </template>
          <template v-else>
            {{ item }}
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style></style>
