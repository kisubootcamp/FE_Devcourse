<template>
  <div>
    <h1>문제 1</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 2</h1>
    <ul>
      <li v-for="(value, key) in person" :key="key">{{ key }}:{{ value }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 3</h1>
    <ul>
      <li v-for="(item, index) in items2" :key="index">{{ index }}:{{ item }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 4</h1>
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 5</h1>
    <ul>
      <li v-for="(button, index) in buttons" :key="index">{{ button }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 6</h1>
    <ul>
      <li v-for="(car, index) in cars" :key="index">모델 {{ car.model }} | 가격: {{ car.price }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 7</h1>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index" :style="{color: fruit === 'Apple' ? 'red' : 'green'}">{{ fruit }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 8</h1>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <strong>{{ category.name }}</strong>
        <ul>
          <li v-for="(item, itemIndex) in category.items" :key="itemIndex">{{ item }}</li>
        </ul>
      </li>
    </ul>
  </div>
  <div>
    <h1>문제 9</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index" :style="{fontWeight: index === 0 ? 'bold' : 'normal'}">{{ item }}</li>
    </ul>
  </div>
  <div>
    <h1>문제 10</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }} [{{ item.length }}]</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        items: ['사과', '바나나', '오렌지'],
        person: { name: '홍길동', age: 25, job: '개발자' },
        items2: ['Apple', 'Banana', 'Cherry'],
        fruits: ['Apple', 'Banana', 'Cherry', 'Grapes'],
        buttons: ['Save', 'Cancel','Delete'],
        cars: [{ model: 'Tesla Model S', price: 79999 }, { model: 'BMW X5', price: 60999 }, { model: 'Audi Q7', price: 54999 }],
        categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] }
      ],

      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter(fruit => fruit.toLowerCase().includes('a'));
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>