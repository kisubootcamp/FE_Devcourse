import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore(
  "todo",
  () => {
    const todos = ref([]);
    const addTodo = (todoText) => {
      todos.value.push({ id: Date.now(), text: todoText, completed: false });
    };
    const removeTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };
    const toggleTodo = (id) => {
      const todo = todos.value.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    };
    return {
      todos,
      addTodo,
      removeTodo,
      toggleTodo,
    };
  },
  {
    persist: {
      storage: localStorage,
      pick: ["todos"],
    },
  }
);
