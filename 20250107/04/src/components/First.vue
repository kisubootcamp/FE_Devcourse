<script>
export default {
  name: "First",
  data() {
    return {
      count: 0,
    };
  },
  props: [],
  beforeCreate() {
    console.log("beforeCreate", this.count);
  },
  created() {
    console.log("created", this.count);
  },
  beforeMount() {
    console.log("beforeMount", this.count);
  },
  mounted() {
    console.log("mounted", this.count);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.count);
  },
  updated() {
    console.log("updated", this.count);
  },
  beforeUnmount() {
    console.log("beforeUnmount", this.count);
  },
  unmounted() {
    console.log("unmounted", this.count);
  },
  watch: {
    count: {
      handler(cur, prev) {
        console.log("현재 값", cur);
        console.log("이전 값", prev);
      },
      deep: true,
    },
    count(cur, prev) {
      console.log("현재 값", cur);
      console.log("이전 값", prev);
    },
  },
};
</script>

<template>
  <div>첫번째</div>
  <p>{{ count }}</p>
  <button @click="count += 1">+</button>
</template>

<style lang="scss" scoped></style>
