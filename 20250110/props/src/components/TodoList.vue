<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todos: {
    type: Array,
  },
  deleteTodo: {
    type: Function,
  },
});
</script>

<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo of todos"
      key="todo.id"
      :todo="todo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>
<style></style>
