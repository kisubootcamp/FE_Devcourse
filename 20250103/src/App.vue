<script>
export default {
  name: "App",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
      person: { name: "홍길동", age: 25, job: "개발자" },
      fruits1: ["Apple", "Banana", "Cherry"],
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
      buttons: ['Save', 'Cancel', 'Delete'],
      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 }
      ],
      fruits2 : ['Apple', 'Banana', 'Grapes'],
      categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] }
      ],
      items: ['Item 1', 'Item 2', 'Item 3']
    };
  },
};
</script>
<template>
  <ul>
    문제 1
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>

  <hr />

  <ul>
    문제 2
    <li v-for="(value, key) in person" :key="key">{{ key }} - {{ value }}</li>
  </ul>

  <hr />

  <ul>
    문제 3
    <li v-for="(fruit, index) in fruits1" :key="index">
      {{ index }} - {{ fruit }}
    </li>
  </ul>

  <hr />

  <ul>
    문제 4
    <li
      v-for="(fruit, index) in fruits.filter((fruit) =>
        fruit.toLowerCase().includes('a')
      )"
      :key="index"
    >
      {{ index }} - {{ fruit }}
    </li>
  </ul>

  <hr />

  <div>
    문제 5
    <button v-for="(button, index) in buttons" :key="index">
      {{ button }}
    </button>
  </div>

  <hr />

  <ul>
    문제 6
    <li v-for="(car, index) in cars" :key="index">
      {{ car.model }} - ${{ car.price }}
    </li>
  </ul>

  <hr />

  <ul>
    문제 7
    <li v-for="(fruit, index) in fruits2" :key="index" :style="{ color: fruit === 'Apple' ? 'red' : 'green' }">
      {{ fruit }}
    </li>
  </ul>

  <hr />

  <div>
    문제 8
    <div v-for="(category, index) in categories" :key="index">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="(item, itemIndex) in category.items" :key="itemIndex">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>

  <hr />

  <ul>
    문제 9
    <li v-for="(item, index) in items" :key="index" :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }">
      {{ item }}
    </li>
  </ul>

  <hr />

  <ul>
    문제 10
    <li v-for="(item, index) in items" :key="index">
      {{ item }} ({{ item.length }})
    </li>
  </ul>
</template>

<style scoped></style>