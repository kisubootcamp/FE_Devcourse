<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todos: Array,
  toggleTodo: Function,
  removeTodo: Function,
});
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="(item, index) in todos"
      :key="index"
      :item
      :toggleTodo
      :removeTodo
    />
  </ul>
</template>
<style></style>
