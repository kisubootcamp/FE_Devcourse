<script>
export default {
  name: "Ex13",
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
  <h2>Level4 - 문제3</h2>
  <ul>
    <li v-for="(value, index) in categories" :key="index">
      {{ value.name }}
      <ul>
        <template v-for="(v, i) in value.items">
          <li>{{ v instanceof Object ? v.name : v }}</li>
          <template v-if="v instanceof Object">
            <ul>
              <li v-for="(v, i) in v.items">{{ v }}</li>
            </ul>
          </template>
        </template>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
