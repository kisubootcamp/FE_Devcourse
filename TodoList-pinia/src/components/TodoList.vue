<script setup>
import TodoListItem from "./TodoListItem.vue"
import { useTodoStore } from '@/stores/todoStore';

const store = useTodoStore()
</script>

<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in store.todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>