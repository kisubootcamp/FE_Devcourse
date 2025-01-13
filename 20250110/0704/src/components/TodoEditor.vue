<script setup>
import { useStore } from "@/store/store";
import { ref } from "vue";

const store = useStore();
</script>
<template>
  <div className="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2
    border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      v-model="store.inputText"
      @keyup.enter="
        () => {
          store.setTodoList(store.inputText);
          store.clearInputText();
        }
      "
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="
        () => {
          store.setTodoList(store.inputText);
          store.clearInputText();
        }
      "
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
