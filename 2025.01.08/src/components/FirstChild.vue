<script>
import SecondChild from "./SecondChild.vue";
export default {
  name: "FirstChild",
  components: {
    SecondChild,
  },
  data() {
    return {
      appName: "FirstChild",
    };
  },
  computed: {
    reversAppName() {
      return this.appName.split("").reverse().join("");
    },
  },
  methods: {
    changeAppName() {
      this.appName = "changeAppName";
    },
  },
};
</script>
<template>
  <SecondChild />
</template>
<style scoped></style>

<!-- provide 객체 -->
<!-- <script>
import SecondChild from "./SecondChild.vue";
export default {
  name: "FirstChild",
  components: {
    SecondChild,
  },
  data() {
    return {};
  },
  provide: {
    message: "안녕",
    name: "철수",
  },
  inject: ["message", "name"],
  created() {
    console.log(this.message, this.name);
  },
};
</script>
<template>
  <h1>FirstChild</h1>
  <h1>{{ message }} / {{ name }}</h1>
  <hr />
  <SecondChild />
</template>
<style scoped></style> -->

<!-- <script>
import SecondChild from "./SecondChild.vue";
export default {
  name: "FirstChild",
  components: {
    SecondChild,
  },
  data() {
    return {};
  },
  props: {
    name: String,
    printHello: Function,
  },
  emits: ["printGreet"],
  methods: {
    printGreet(name) {
      this.$emit("greet", name);
    },
  },
};
</script>
<template>
  <h1>FirstChild</h1>
  <button @click="$emit('printGreet')">printGreet</button>
  <SecondChild
    :name="name"
    :print-hello="printHello"
    @print-greet="$emit('printGreet')"
  />
</template>
<style scoped></style> -->
