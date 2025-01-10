<script setup>
  import { useTodoStore } from '@/stores/todoStore';
  import TodoListItem from './TodoListItem.vue';

  const todoStore = useTodoStore();
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="(todoItem, index) in todoStore.todoList"
      :key="index"
      :index="index"
      :todo="todoItem" />
  </ul>
</template>
<style></style>
