<script setup>
import { ref } from "vue";

const props = defineProps({
  todos: Array,
});
const inputTodo = ref("");
const addTodo = () => {
  if (inputTodo.value.trim() !== "") {
    props.todos.push({
      id: Date.now(),
      todo: inputTodo.value,
      completed: false,
    });
    inputTodo.value = "";
  }
};
</script>
<template>
  <div className="flex p-4">
    <input
      type="text"
      v-model="inputTodo"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      @keyup.enter="addTodo"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="addTodo"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
