<script>
import Form1 from "./Form1.vue";
import Form2 from "./Form2.vue";
import Form3 from "./Form3.vue";
import Form4 from "./Form4.vue";
import Form5 from "./Form5.vue";
import Form6 from "./Form6.vue";
import Form7 from "./Form7.vue";
import Form8 from "./Form8.vue";
import Lecture01 from "./Lecture01.vue";
import Lecture02 from "./Lecture02.vue";
import Practice01 from "./Practice01.vue";

export default {
  name: "App",
  components: {
    Lecture01,
    Lecture02,
    Practice01,
    Form1,
    Form2,
    Form3,
    Form4,
    Form5,
    Form6,
    Form7,
    Form8,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div class="wrapper">
    <Lecture01 />
    <Lecture02 />
    <Practice01 />
    <Form1 />
    <Form2 />
    <Form3 />
    <Form4 />
    <Form5 />
    <Form6 />
    <Form7 />
    <Form8 />
  </div>
</template>
<style>
.wrapper {
  margin: 50px;
}
h1 {
  font-size: 20px;
  font-weight: 700;
  padding-top: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-top: 1px solid #d4d4d4;
}
</style>
