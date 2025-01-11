<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { id, user } = route.params;
const { lang } = route.query;
const props = defineProps({
  user: String,
  id: String,
  lang: String,
});
console.log(route);
</script>
<template>
  <h1>User: {{ id }} / {{ user }} / {{ lang }}</h1>
  <h1>User Props: {{ props.id }} / {{ props.user }} / {{ props.lang }}</h1>
</template>
<style scoped></style>
