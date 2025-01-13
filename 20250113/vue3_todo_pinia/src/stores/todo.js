import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore(
  "todos",
  () => {
    const todos = ref([]);
    const addTodo = (text) => {
      todos.value.push({
        id: Date.now(),
        text,
        done: false,
      });
    };
    const toggleTodo = (id) => {
      todos.value = todos.value.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    };
    const deleteTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };
    return {
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
    };
  },
  {
    persist: {
      storage: localStorage,
      pick: ["todos"],
    },
  }
);
