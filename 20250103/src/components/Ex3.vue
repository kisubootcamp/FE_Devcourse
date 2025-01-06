<script>
export default {
  name: "Ex3",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
      person: { name: "홍길동", age: 25, job: "개발자" },
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
      items2: ["Apple", "Banana", "Cherry"],
      buttons: ["Save", "Cancel", "Delete"],
      cars: [
        { model: "Tesla Model S", price: 79999 },
        { model: "BMW X5", price: 60999 },
        { model: "Audi Q7", price: 54999 },
      ],
      fruits2: ["Apple", "Banana", "Grapes"],
      categories: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        { name: "Vegetables", items: ["Carrot", "Broccoli"] },
      ],
      items3: ["Item 1", "Item 2", "Item 3"],
      items4: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <!-- 1 -->
  <ul>
    <li v-for="(value, index) in items" :key="index">{{ value }}</li>
  </ul>

  <!-- 2 -->
  <ul>
    <li v-for="(value, key) in person">{{ key }} - {{ value }}</li>
  </ul>

  <!-- 3 -->
  <ul>
    <li v-for="(value, index) in items2" :key="index">
      {{ index }} - {{ value }}
    </li>
  </ul>

  <!-- 4 -->
  <ul>
    <template v-for="(value, index) in fruits" :key="index">
      <li v-if="value.includes('a')">{{ value }}</li>
    </template>
  </ul>

  <!-- 5 -->
  <button v-for="(value, idx) in buttons" :key="idx">{{ value }}</button>

  <!-- 6 -->
  <ul>
    <li v-for="(car, idx) in cars" :key="idx">
      {{ car.model }} - {{ car.price }}
    </li>
  </ul>

  <!-- 7 -->
  <ul>
    <template v-for="(fruit, idx) in fruits2" :key="idx">
      <li v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</li>
      <li v-else style="color: green">{{ fruit }}</li>
    </template>
  </ul>
  <!-- 8 -->
  <ul>
    <li v-for="(category, idx) in categories" :key="idx">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="(item, idx) in category.items" :key="idx">{{ item }}</li>
      </ul>
    </li>
  </ul>

  <!-- 9 -->
  <ul>
    <template v-for="(item, idx) in items3" :key="idx">
      <li v-if="idx === 0">
        <strong>{{ item }}</strong>
      </li>
      <li v-else>{{ item }}</li>
    </template>
  </ul>

  <!-- 10 -->
  <ul>
    <li v-for="(item, idx) in items4" :key="idx">
      {{ item }} - {{ item.length }}
    </li>
  </ul>
</template>
<style scoped></style>
