<script setup>
  import { reactive } from 'vue';
  import TodoEditor from './TodoEditor.vue';
  import TodoHeader from './TodoHeader.vue';
  import TodoList from './TodoList.vue';

  const todoList = reactive([]);

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  const toggleDone = (index) => {
    todoList[index].done = !todoList[index].done;
  };
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @addTodo="addTodo" />
    <TodoList
      :todoList="todoList"
      @removeTodo="removeTodo"
      @toggleDone="toggleDone" />
  </div>
</template>
<style></style>
