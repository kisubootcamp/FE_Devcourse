<script>
export default {
  name: 'Ex4_3',
  data() {
    return {
      categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        {
          name: 'Vegetables',
          items: ['Carrot', 'Broccoli',
            { name: 'Leafy Vegetables', items: ['Spinach', 'Lettuce'] }]
        }]
    };
  },
};
</script>
<template>
  <h2>Lv4 - 3번</h2>
  <ul>
    <li v-for="category in categories" :key="category.name">
      {{ category.name }}
      <ul>
        <li v-for="item in category.items" :key="item">
          <div v-if="typeof item === 'string'">{{ item }}</div>
          <div v-else>
            {{ item.name }}
            <ul>
              <li v-for="value in item.items" :key="value">
              {{ value }}
            </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>