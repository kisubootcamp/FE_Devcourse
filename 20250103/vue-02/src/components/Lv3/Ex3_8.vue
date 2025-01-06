<script>
export default {
  name: 'Ex3_8',
  data() {
    return {
      categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] }
      ]
    };
  },
};
</script>
<template>
  <h2>Lv3 - 8번</h2>
  <ul>
    <li v-for="category in categories" :key="category.name">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="item in category.items" :key="item">{{ item }}</li>
      </ul>
    </li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>