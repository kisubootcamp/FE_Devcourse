<script setup>
import { reactive } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const todoList = reactive([]);
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor :todoList="todoList" />
    <TodoList :todoList="todoList" />
  </div>
</template>
<style></style>
