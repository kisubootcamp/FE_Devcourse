import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTodoListStore = defineStore("todoList", () => {
  const todoList = reactive([]);

  return { todoList };
});
