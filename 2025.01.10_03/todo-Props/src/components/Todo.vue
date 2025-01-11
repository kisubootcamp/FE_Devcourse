<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  data() {
    return {
      listItems: [],
    };
  },
  methods: {
    addTodo(text) {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      this.listItems.push(newTodo);
    },
    deleteTodo(id) {
      this.listItems = this.listItems.filter((item) => item.id !== id);
    },
    updateTodoCompleted(id, completed) {
      const todo = this.listItems.find((item) => item.id === id);
      if (todo) {
        todo.completed = completed;
      }
    },
  },
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" />
    <TodoList
      :listItems="listItems"
      @delete-item="deleteTodo"
      @update-completed="updateTodoCompleted"
    />
  </div>
</template>
<style></style>
