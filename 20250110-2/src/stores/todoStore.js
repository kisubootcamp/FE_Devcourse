import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore(
  "todoStore",
  () => {
    const todoList = ref([]);
    const generateId = () => Date.now();
    const deleteTodo = (id) => {
      const index = todoList.value.findIndex((todo) => todo.id === id);
      todoList.value.splice(index, 1);
    };
    const addTodo = (text) => {
      if (text === "") return;
      todoList.value.push({ id: generateId(), text: text, checked: false });
    };
    return {
      todoList,
      deleteTodo,
      addTodo,
    };
  },
  { persist: true }
);
