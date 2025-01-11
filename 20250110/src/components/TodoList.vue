<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todoList: Array,
});
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <template v-if="todoList.length > 0">
      <TodoListItem
        v-for="todo in todoList"
        :todo="todo"
        :todolist="props.todoList"
      />
    </template>
  </ul>
</template>
<style></style>
