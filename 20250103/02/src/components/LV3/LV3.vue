<script>
export default {
  name: "LV3",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
      person: { name: "홍길동", age: 25, job: "개발자" },
      items2: ["Apple", "Banana", "Cherry"],
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
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
  <ul>
    <li v-for="(item, idx) in items" :key="idx">
      {{ item }}
    </li>
  </ul>
  <hr />
  <ul>
    <li v-for="(val, key) in person" :key="key">{{ key }} - {{ val }}</li>
  </ul>
  <hr />
  <ul>
    <li v-for="(item, idx) in items2" :key="idx">{{ idx }} - {{ item }}</li>
  </ul>
  <hr />
  <template v-for="fruit in fruits">
    <template v-if="fruit.includes('a')">
      <ul>
        <li>{{ fruit }}</li>
      </ul>
    </template>
  </template>
  <hr />
  <ul>
    <li v-for="(button, idx) in buttons" :key="idx">
      {{ button }}
    </li>
  </ul>
  <hr />
  <template v-for="car in cars">
    <template v-for="(val, key) in car" :key="key">
      <span>{{ key }} : {{ val }}</span> <br />
    </template>
  </template>
  <hr />
  <ul>
    <li
      v-for="(fruit, idx) in fruits2"
      :key="idx"
      :style="{ color: fruit === 'Apple' ? 'red' : 'green' }"
    >
      {{ fruit }}
    </li>
  </ul>
  <hr />
  <ul>
    <li v-for="category in categories">
      {{ category.name }}
      <template v-for="item in category.items">
        <ul>
          <li>{{ item }}</li>
        </ul>
      </template>
    </li>
  </ul>
  <hr />
  <ul>
    <li v-for="(item, idx) in items3">
      <template v-if="idx === 0"
        ><strong>{{ item }}</strong></template
      >
    </li>
  </ul>
  <hr />
  <ul>
    <li v-for="(item, idx) in items4" :key="idx">
      {{ item }} : {{ item.length }}
    </li>
  </ul>
</template>
<style scoped></style>
