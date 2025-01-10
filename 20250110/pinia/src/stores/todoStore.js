import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore(
  "todoStore",
  () => {
    const todos = ref([{ id: 1, value: "ddd", checked: false }]);
    const handleAddTodo = (value) => {
      todos.value.push({ id: Date.now(), value, checked: false });
    };
    const handleDeleteTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };
    return {
      todos,
      handleAddTodo,
      handleDeleteTodo,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);
