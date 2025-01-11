<script>
import FirstChild from "./components/FirstChild.vue";
export default {
  name: "App",
  components: {
    FirstChild,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$refs.childRef.appName);
    console.log(this.$refs.childRef.reversAppName);
    setTimeout(() => {
      this.$refs.childRef.changeAppName();
    }, 5000);
  },
};
</script>
<template>
  <h1>App count</h1>
  <FirstChild ref="childRef" />
</template>
<style scoped></style>

<!-- <script>
import FirstChild from "./components/FirstChild.vue";
import { computed } from "vue";
import { count, increment } from "./keys/count.js";
export default {
  name: "App",
  components: {
    FirstChild,
  },
  data() {
    return {
      count: 0,
    };
  },
  provide() {
    return {
      [count]: computed(() => this.count),
      [increment]: this.increment,
    };
  },
  methods: {
    increment() {
      this.count++;
      console.log("increment");
    },
  },
};
</script>
<template>
  <h1>App count : {{ count }}</h1>
  <FirstChild />
</template>
<style scoped></style> -->

<!-- <script>
import FirstChild from "./components/FirstChild.vue";
export default {
  name: "App",
  components: {
    FirstChild,
  },
  data() {
    return {
      name: "영희",
    };
  },
  // provide: {
  //   message: "안녕",
  //   name: "철수",
  // },
  provide() {
    return {
      message: "안녕철수",
      name: this.name,
    };
  },
  inject: ["isSecond"],
  created() {
    console.log(this.isSecond);
  },
};
</script>
<template>
  <FirstChild />
</template>
<style scoped></style> -->

<!-- <script>
import FirstChild from "./components/FirstChild.vue";
export default {
  name: "App",
  components: {
    FirstChild,
  },
  data() {
    return {
      name: "james",
    };
  },
  methods: {
    printHello() {
      console.log("hello");
    },
    printGreet() {
      console.log("greet");
    },
  },
};
</script>
<template>
  <FirstChild
    :name="name"
    :print-hello="printHello"
    @print-greet="printGreet"
  />
</template>
<style scoped></style> -->
