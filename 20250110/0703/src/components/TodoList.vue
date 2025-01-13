<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todoList: {},
  deleteTodoList: {},
});
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="(todo, idx) in todoList"
      :todo="todo"
      :idx="idx"
      :deleteTodoList="props.deleteTodoList"
    />
  </ul>
</template>
<style></style>
