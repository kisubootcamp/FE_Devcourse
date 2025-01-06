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
  <div>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category.name }}
        <ul>
          <li v-for="(item, index) in category.items" :key="index">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style></style>
