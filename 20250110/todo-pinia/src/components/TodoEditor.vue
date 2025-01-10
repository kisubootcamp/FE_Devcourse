<script setup>
  import { useTodoStore } from '@/stores/todoStore';
  import { ref } from 'vue';

  const newTodo = ref('');
  const todoStore = useTodoStore();

  const handleClick = () => {
    todoStore.addTodo({ data: newTodo.value, done: false });
    newTodo.value = '';
  };
</script>
<template>
  <div className="flex p-4">
    <input
      v-model="newTodo"
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <button
      @click="handleClick"
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
      Add Todo
    </button>
  </div>
</template>
<style></style>
