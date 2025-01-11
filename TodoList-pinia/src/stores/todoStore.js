import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref([]);

  const addTodo = (text) => {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false,
    });
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const toggleTodo = (id) => {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
});
