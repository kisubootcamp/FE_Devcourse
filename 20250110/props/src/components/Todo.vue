<script setup>
import { reactive } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const stateObj = reactive({ todos: [{ id: 1, value: "ddd", checked: false }] });
const handleAddTodo = (value) => {
  stateObj.todos.push({ id: Date.now(), value, checked: false });
};
const handleDeleteTodo = (id) => {
  stateObj.todos = stateObj.todos.filter((todo) => todo.id !== id);
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="handleAddTodo" />
    <TodoList :todos="stateObj.todos" :deleteTodo="handleDeleteTodo" />
  </div>
</template>
<style></style>
