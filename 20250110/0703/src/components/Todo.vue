<script setup>
import { reactive } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const todoList = reactive([]);
const setTodoList = (text) => {
  todoList.push(text);
};
const deleteTodoList = (idx) => {
  todoList.splice(idx, 1);
};
</script>

<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor :setTodoList="setTodoList" />
    <TodoList :todoList="todoList" :deleteTodoList="deleteTodoList" />
  </div>
</template>

<style></style>
