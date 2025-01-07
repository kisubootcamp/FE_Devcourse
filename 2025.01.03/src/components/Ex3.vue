<script>
export default {
  name: "Ex3",
  data() {
    return {
      items1: ["사과", "바나나", "오렌지"],
      person: { name: "홍길동", age: 25, job: "개발자" },
      items: ["Apple", "Banana", "Cherry"],
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
      buttons: ["Save", "Cancel", "Delete"],
      cars: [
        { model: "Tesla Model S", price: 79999 },
        { model: "BMW X5", price: 60999 },
        { model: "Audi Q7", price: 54999 },
      ],
      fruits7: ["Apple", "Banana", "Grapes"],
      categories: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        { name: "Vegetables", items: ["Carrot", "Broccoli"] },
      ],
      items9: ["Item 1", "Item 2", "Item 3"],
      items10: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <!-- 연습문제 1 -->
  <ul>
    <li v-for="item in items1" :key="index">{{ item }}</li>
  </ul>

  <!-- 연습문제 2 -->
  <ul>
    <li v-for="(value, key) in person" :key="key">{{ value }}</li>
  </ul>

  <!-- 연습문제 3 -->
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ index }} : {{ item }}
    </li>
  </ul>

  <!-- 연습문제 4  -->
  <template v-for="fruit in fruits" :key="index">
    <li v-if="fruit.includes('a')">{{ fruit }}</li>
  </template>

  <!-- 연습문제 5 -->
  <ul>
    <li v-for="button in buttons" :key="index">{{ button }}</li>
  </ul>

  <!-- 연습문제 6 -->
  <ul>
    <li v-for="car in cars" :key="car.model">
      {{ car.model }}, {{ car.price }}
    </li>
  </ul>

  <!-- 연습문제 7 -->
  <template v-for="fruit in fruits7" :key="index">
    <li v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</li>
    <li v-else style="color: green">{{ fruit }}</li>
  </template>

  <!-- 연습문제 8 -->
  <ul>
    <li v-for="category in categories" :key="category.name">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="(item, index) in category.items" :key="index">{{ item }}</li>
      </ul>
    </li>
  </ul>

  <!-- 연습문제 9 -->
  <ul>
    <li
      v-for="(item, index) in items9"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ item }}
    </li>
  </ul>
  <!-- 연습문제 10 -->
  <ul>
    <li v-for="item in items10">{{ item }}/{{ item.length }}</li>
  </ul>
</template>
<style scoped></style>
