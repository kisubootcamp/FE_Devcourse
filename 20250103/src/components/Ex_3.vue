<script>
export default {
  name: "Ex_3",
  data() {
    return {
      // Q3_1
      fruits: ["사과", "바나나", "오렌지"],
      // Q3_2
      person: {
        name: "홍길동",
        age: 25,
        job: "개발자",
      },
      // Q3_3
      engFruits: ["Apple", "Banana", "Cherry"],
      // Q3_4
      eng4Fruits: ["Apple", "Banana", "Orange", "Grapes"],
      // Q3_5
      buttons: ["Save", "Cancel", "Delete"],
      // Q3_6
      cars: [
        { model: "Tesla Model S", price: 79999 },
        { model: "BMW X5", price: 60999 },
        { model: "Audi Q7", price: 54999 },
      ],
      // Q3_7
      fruits7: ["Apple", "Banana", "Grapes"],
      // Q3_8
      categories: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        { name: "Vegetables", items: ["Carrot", "Broccoli"] },
      ],
      // Q3_9
      items: ["Item 1", "Item 2", "Item 3"],
      // Q3_10
      items10: ["Apple", "Banana", "Orange"],
    };
  },
  computed: {
    // Q3_4
    filteredFruits() {
      return this.eng4Fruits.filter(
        (fruit) => fruit.includes("a") || fruit.includes("A")
      );
    },
  },
};
</script>
<template>
  <div>
    <!-- Q3_1 -->
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
    <!-- Q3_2 -->
    <ul>
      <li v-for="(value, key) in person" :key="key">{{ key }} : {{ value }}</li>
    </ul>
    <!-- Q3_3 -->
    <ul>
      <li v-for="(engFruit, idx) in engFruits" :key="idx">
        {{ idx }} : {{ engFruit }}
      </li>
    </ul>
    <!-- Q3_4 -->
    <ul>
      <li v-for="filteredFruit in filteredFruits" :key="filteredFruit">
        {{ filteredFruit }}
      </li>
    </ul>
    <!-- Q3_5 -->
    <div>
      <button v-for="button in buttons" :key="button">
        {{ button }}
      </button>
    </div>
    <!-- Q3_6 -->
    <ul>
      <li v-for="car in cars" :key="car.model">
        {{ car.model }} - ${{ car.price }}
      </li>
    </ul>
    <!-- Q3_7 -->
    <ul>
      <li
        v-for="fruit in fruits7"
        :key="fruit"
        :style="{ color: fruit === 'Apple' ? 'red' : 'green' }"
      >
        {{ fruit }}
      </li>
    </ul>
    <!-- Q3_8 -->
    <div v-for="category in categories" :key="category">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="item in category.items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- Q3_9 -->
    <ul>
      <li
        v-for="(item, idx) in items"
        :key="item"
        :style="{ fontWeight: idx === 0 && 'bold' }"
      >
        {{ item }}
      </li>
    </ul>
    <!-- Q3_10 -->
    <ul>
      <li v-for="item in items10" :key="item">
        {{ item }} length: {{ item.length }}
      </li>
    </ul>
  </div>
</template>
<style></style>
