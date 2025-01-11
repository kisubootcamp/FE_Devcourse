<script setup>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="todoStore.addTodo" />
    <TodoList
      :listItems="todoStore.listItems"
      @delete-item="todoStore.deleteTodo"
      @update-completed="todoStore.updateTodoCompleted"
    />
  </div>
</template>
<style></style>
