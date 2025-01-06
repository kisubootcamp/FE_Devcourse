<template>
  <div>
    <Ex3 />
    <hr/>
    <Ex4 />
  </div>
</template>

<script>
import Ex3 from './components/Ex3.vue';
import Ex4 from './components/Ex4.vue';

  export default {
    name: "App",
    components: {
      Ex3,
      Ex4,
    },
    data() {
      return {};
    },
  }
</script>
