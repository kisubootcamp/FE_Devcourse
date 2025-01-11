<script setup>
import TodoListItem from "./TodoListItem.vue";
const props = defineProps({ todoList: Array });

const emit = defineEmits(["toggleDone", "deleteTodo"]);

const toggleDone = (id) => {
  emit("toggleDone", id);
};

const handleDelete = (id) => {
  emit("deleteTodo", id);
};
</script>

<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      @toggleDone="toggleDone"
      @deleteTodo="handleDelete"
    />
  </ul>
</template>
<style></style>
