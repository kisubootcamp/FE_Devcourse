<script setup>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
</script>

<template>
  <div className="max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
    <TodoHeader />
    <TodoEditor />
    <TodoList />
  </div>
</template>
