<script setup>
import { onBeforeUpdate, onMounted, onUpdated, reactive, ref } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import { useTodoStore } from "@/store/todoStore";

const todoStore = useTodoStore();

onMounted(() => {
  todoStore.handleLoadTodos();
});
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor />
    <TodoList />
  </div>
</template>
<style></style>
