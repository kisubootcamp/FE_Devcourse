<script setup>
import { useStore } from "@/store/store";
import TodoListItem from "./TodoListItem.vue";

const store = useStore();
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="(todo, idx) in store.todoList"
      :todo="todo"
      :idx="idx"
    />
  </ul>
</template>
<style></style>
