<!-- <script>
import Ex4 from "./components/Ex4.vue";

export default {
  name: "App",
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
      categories: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        { name: "Vegetables", items: ["Carrot", "Broccoli"] },
      ],
      items2: ["Item 1", "Item 2", "Item 3"],
      items3: ["Apple", "Banana", "Orange"],
    };
  },
  components: {
    Ex4,
  },
};
</script>
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
  <ul>
    <li v-for="(item, key) in person" :key="key">{{ key }} - {{ item }}</li>
  </ul>
  <ul>
    <li v-for="(item, index) in items2" :key="index">
      {{ index }} - {{ item }}
    </li>
  </ul>
  <ul>
    <template v-for="(fruit, index) in fruits" :key="index">
      <li v-if="fruit.includes('a')">
        {{ fruit }}
      </li>
    </template>
  </ul>
  <ul>
    <button v-for="type in buttons">{{ type }}</button>
  </ul>
  <ul>
    <li v-for="car in cars">{{ car.model }} : {{ car.price }}</li>
  </ul>
  <ul>
    <template v-for="fruit in fruits">
      <li
        :style="{
          color: fruit === 'Apple' ? 'red' : 'green',
        }"
      >
        {{ fruit }}
      </li>
    </template>
  </ul>
  <ul>
    <li v-for="category in categories">
      <h1>{{ category.name }}</h1>
      <template v-for="items in category.items">
        <li>{{ items }}</li>
      </template>
    </li>
  </ul>
  <ul>
    <template v-for="(item, index) in items2">
      <li :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }">
        {{ item }}
      </li>
    </template>
  </ul>
  <ul>
    <li v-for="item in items3">{{ item }} - {{ item.length }}</li>
  </ul>
  <Ex4 />

  <button class="btn btn-primary">123</button>
</template>
<style lang="scss" scoped>
div {
  h1 {
    color: pink;
  }
}
</style> -->

<template>
  <div>
    <h1>{{ directiveName }}</h1>
    <label>ID</label>
    <input type="text" v-model="userId" />
    <button v-on:click="chk">확인</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directiveName: "v-model",
      userId: "test",
    };
  },
  methods: {
    chk() {
      alert(this.userId);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  margin-bottom: 10px;
}
ul,
li {
  margin: 0;
  padding: 0;
}
</style>  