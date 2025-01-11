<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps(["todos"]);
const emit = defineEmits(["delete-todo", "toggle-todo"]);

</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="(id) => emit('toggle-todo', id)"
      @delete-todo="(id) => emit('delete-todo', id)"
    />
  </ul>
</template>
<style></style>
