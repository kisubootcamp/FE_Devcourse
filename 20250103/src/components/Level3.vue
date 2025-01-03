<script>
export default {
  name: "Level3",
  data() {
    return {
      items1: ["사과", "바나나", "오렌지"],
      person2: { name: "홍길동", age: 25, job: "개발자" },
      items3: ["Apple", "Banana", "Cherry"],
      fruits4: ["Apple", "Banana", "Orange", "Grapes"],
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
  <!-- 문1 -->
  <ul>
    <li v-for="(item, i) in items1" :key="i">
      {{ item }}
    </li>
  </ul>
  <!-- 문2 -->
  <ul>
    <li v-for="(value, key) in person2" :key="key">{{ key }}: {{ value }}</li>
  </ul>
  <!-- 문3 -->
  <ul>
    <li v-for="(item, i) in items3" :key="i">{{ i }}: {{ item }}</li>
  </ul>
  <!-- 문4 -->
  <template v-for="item in fruits4">
    <span v-if="item.includes('a')">
      {{ item }}
    </span>
  </template>
  <!-- 문5 -->
  <button v-for="button in buttons">{{ button }}</button>
  <!-- 문6 -->
  <ul>
    <li v-for="car in cars">{{ car.model }}:{{ car.price }}</li>
  </ul>
  <!-- 문7 -->
  <div
    v-for="fruit in fruits7"
    :key="fruit"
    :style="{ color: fruit === 'Apple' ? 'red' : 'green' }"
  >
    {{ fruit }}
  </div>
  <!-- 문8 -->
  <div>{{ categories }}</div>
  <ul>
    <li v-for="categorie in categories">
      <h3>{{ categorie.name }}</h3>
      <ul>
        <li v-for="item in categorie.items">{{ item }}</li>
      </ul>
    </li>
  </ul>
  <!-- 문9 -->
  <div
    v-for="(item, index) in items9"
    :key="index"
    :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
  >
    {{ item }}
  </div>
  <!-- 문10 -->
  <div v-for="item in items10">{{ item }} {{ item.length }}</div>
</template>
<style scoped></style>
