<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todoList: Array,
});
const deleteTodo = (id) => {
  const index = props.todoList.findIndex((todo) => todo.id === id);
  props.todoList.splice(index, 1);
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      @delete="deleteTodo"
    />
  </ul>
</template>
<style></style>
