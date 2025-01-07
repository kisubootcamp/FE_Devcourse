<script>
import First from "./components/First.vue";
import Second from "./components/Second.vue";

export default {
  name: "App",
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    First,
    Second,
  },
};
</script>

<template>
  <article>스타또</article>
  <button @click="isShow = !isShow">d</button>
  <First v-if="isShow" />
</template>

<style lang="scss" scoped></style>
