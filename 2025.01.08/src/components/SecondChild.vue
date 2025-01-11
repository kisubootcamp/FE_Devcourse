<script>
export default {
  name: "secondChild",
  data() {
    return {};
  },
};
</script>
<template></template>
<style scoped></style>
<!-- <script>
import { count, increment } from "./keys/count.js";
export default {
  name: "SecondChild",
  data() {
    return {};
  },
  // inject: ["count", "increment"],
  inject: {
    secondCount: {
      from: "count",
      default() {
        return 20;
      },
    },
    incrementsSymbol: {
      from: increment,
    },
  },
};
</script>
<template>
  <h1>SecondChild</h1>
  <h1>count: {{ secondCount }}</h1>
  <button @click="increment">증가</button>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: "SecondChild",
  data() {
    return {};
  },
  provide: {
    isSecond: true,
  },
  inject: ["message", "name"],
  created() {
    console.log(this.message, this.name);
  },
};
</script>
<template>
  <h1>SecondChild</h1>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: "SecondChild",
  data() {
    return {};
  },
  props: {
    name: String,
    printHello: Function,
  },
  emits: ["printGreet"],
};
</script>
<template>
  <h1>SecondChild</h1>
  <h1>{{ name }}</h1>
  <button @click="printHello">안녕</button>
  <button @click="$emit('printGreet', name)">클릭</button>
</template>
<style scoped></style> -->
