<script>
export default {
  name: "Ex8",
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
  <h2>문제8</h2>
  <ul>
    <li v-for="(value, index) in categories" :key="index">
      {{ value.name }}
      <ul>
        <li v-for="(v, i) in value.items" :key="i">{{ v }}</li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
