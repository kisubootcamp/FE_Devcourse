<script>
import Ex1 from "./components/Ex1.vue";
import Ex2 from "./components/Ex2.vue";
import Ex3 from "./components/Ex3.vue";
import Ex4 from "./components/Ex4.vue";
import Ex5 from "./components/Ex5.vue";
import Ex6 from "./components/Ex6.vue";
import Ex7 from "./components/Ex7.vue";
import Ex8 from "./components/Ex8.vue";
import Ex9 from "./components/Ex9.vue";
import Lv2Ex1 from "./components/lv2/lv2Ex1.vue";
import Lv2Ex2 from "./components/lv2/Lv2Ex2.vue";
import Lv2Ex3 from "./components/lv2/Lv2Ex3.vue";
import Lv2Ex4 from "./components/lv2/Lv2Ex4.vue";
import Lv2Ex5 from "./components/lv2/Lv2Ex5.vue";
import Lv2Ex6 from "./components/lv2/Lv2Ex6.vue";
import Lv2Ex7 from "./components/lv2/Lv2Ex7.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Ex1,
    Ex2,
    Ex3,
    Ex4,
    Ex5,
    Ex6,
    Ex7,
    Ex8,
    Ex9,
    Lv2Ex1,
    Lv2Ex2,
    Lv2Ex3,
    Lv2Ex4,
    Lv2Ex5,
    Lv2Ex6,
    Lv2Ex7,
  },
};
</script>
<template>
  <Ex1 />
  <Ex2 />
  <Ex3 />
  <Ex4 />
  <Ex5 />
  <Ex6 />
  <Ex7 />
  <Ex8 />
  <Ex9 />

  <p>
    Level 2
    -------------------------------------------------------------------------------------
  </p>

  <Lv2Ex1 />
  <Lv2Ex2 />
  <Lv2Ex3 />
  <Lv2Ex4 />
  <Lv2Ex5 />
  <Lv2Ex6 />
  <Lv2Ex7 />
</template>
<style scoped></style>
