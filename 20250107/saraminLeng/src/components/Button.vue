<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  props: ["text", "fullBg", "onClick"],
};
</script>
<template>
  <button
    v-bind:class="`w-full max-w-[200px] h-8 ${
      fullBg ? 'bg-gray-400 text-white' : 'border border-gray-200'
    }`"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>
<style scoped></style>
