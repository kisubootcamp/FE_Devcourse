import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todoStore", () => {
  const listItems = ref([]);
  const addTodo = (text) => {
    listItems.value.push({ id: Date.now(), text, completed: false });
  };

  const deleteTodo = (id) => {
    listItems.value = listItems.value.filter(
      (listItems) => listItems.id !== id
    );
  };
  const updateTodoCompleted = (id, completed) => {
    const todo = listItems.value.find((item) => item.id === id);
    if (todo) {
      todo.completed = completed;
    }
  };

  return {
    listItems,
    addTodo,
    deleteTodo,
    updateTodoCompleted,
  };
});
