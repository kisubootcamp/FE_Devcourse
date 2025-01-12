<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  props:{
    todos: Array,
  }
};
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="$emit('delete-todo', todo.id)"
      @toggle-todo="$emit('toggle-todo', todo.id)"
    />
  </ul>
</template>
<style></style>
