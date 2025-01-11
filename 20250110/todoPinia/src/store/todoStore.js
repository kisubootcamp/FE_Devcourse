import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref([
    { id: 1, text: "1", completed: true },
    { id: 2, text: "2", completed: false },
    { id: 3, text: "3", completed: false },
  ]);
  const toggleTodo = (id) => {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  const removeTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };
  return {
    todos,
    toggleTodo,
    removeTodo,
  };
});
