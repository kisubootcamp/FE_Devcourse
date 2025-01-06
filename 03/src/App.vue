<script>
export default {
  data() {
    return {
      count: 0,
      query: "",
      name: "철수",
      age: 10,
      gender: "male",
    };
  },
  methods: {
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
    increment(event) {
      this.count++;
      console.log(event);
    },
    incrementByAmount(event, num) {
      this.count += num;
    },

    handleInput($event) {
      this.query = $event.target.value;
    },
  },
};
</script>
<template>
  <h1 className="text-3xl font-bold underline">{{ count }}</h1>
  <button @click.once="decrement">감소</button>
  <button @click="reset">리셋</button>
  <!-- <button @click="increment">증가</button> -->
  <button @click="increment($event)">증가</button>
  <button @click="incrementByAmount($event, 10)">10증가</button>
  <input type="text" :value="query" @input="handleInput" />
  {{ query }}

  <!-- v-memo -->
  <!-- name 또는 age가 바뀌기 전에는 리렌더링되지않음 -->
  <div v-memo="[name,age]">
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ gender }}</p>
  </div>
  <button @click="name = 'james'">이름변경</button>
  <button @click="age = 50">나이변경</button>
  <button @click="gender = 'female'">성별변경</button>
</template>
<style></style>
