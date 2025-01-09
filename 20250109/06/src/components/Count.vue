<script setup>
import { inject } from "vue";

const props = defineProps({
  count: {
    type: Number,
    rejected: true,
    default() {
      return 10;
    },
    validator(value) {
      return value > 0;
    },
  },
});

const emite = defineEmits(["increment"]);
const increment = () => {
  emite("increment", 120);
};

const provideCount = inject("provideCount");
</script>

<template>
  <div>{{ props.count }}</div>
  <button @click="increment">클릭</button>
  <h1>provideCount: {{ provideCount }}</h1>
</template>

<style lang="scss" scoped></style>
