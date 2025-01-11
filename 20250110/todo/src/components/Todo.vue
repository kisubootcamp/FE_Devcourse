<script setup>
import { ref } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const todos = ref([
  { id: 1, text: "1", completed: true },
  { id: 2, text: "2", completed: false },
  { id: 3, text: "3", completed: false },
]);
const toggleTodo = (id) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor :todos />
    <TodoList :todos :toggleTodo :removeTodo />
  </div>
</template>
<style></style>
