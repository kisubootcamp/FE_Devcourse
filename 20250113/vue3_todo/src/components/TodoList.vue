<script setup>
import TodoListItem from "./TodoListItem.vue";
const props = defineProps({
  todos: {
    type: Array,
    default() {
      return [];
    },
  },
});
const emits = defineEmits(["toggle-todo", "delete-todo"]);
const toggleTodo = (id) => {
  emits("toggle-todo", id);
};
const deleteTodo = (id) => {
  emits("delete-todo", id);
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </ul>
</template>
<style></style>
