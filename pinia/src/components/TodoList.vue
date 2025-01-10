<script setup>
import { useTodoListStore } from "@/stores/todoListStore";
import TodoListItem from "./TodoListItem.vue";

const todoStore = useTodoListStore();
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <template v-if="todoStore.todoList.length > 0">
      <TodoListItem v-for="todo in todoStore.todoList" :todo="todo" />
    </template>
  </ul>
</template>
<style></style>
