<script>
  import Ex1 from "./components/Ex1.vue";
  import Ex2 from "./components/Ex2.vue";

  export default {
    name: "App",
    components: {
      Ex1,
      Ex2,
    },
    data() {
      return {};
    },
  };
</script>

<template>
  <div>
    <Ex1 />
    <hr />
    <h1> Lv.2 </h1>
    <hr/>
    <Ex2 />
  </div>
</template>
