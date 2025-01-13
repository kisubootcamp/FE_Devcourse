<script>
export default {
  name: "Option",
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<template>
  <div>{{ count }}</div>
  <div>doubleCount {{ doubleCount }}</div>
  <button @click="decrement">감소</button>
  <button @click="reset">리셋</button>
  <button @click="increment">증가</button>
</template>

<style lang="scss" scoped></style>
