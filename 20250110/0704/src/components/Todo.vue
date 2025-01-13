<script setup>
import { reactive } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import { useStore } from "@/store/store";
</script>

<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor />
    <TodoList />
  </div>
</template>

<style></style>
