<script setup>
  import TodoListItem from './TodoListItem.vue';
  import { defineProps } from 'vue';

  const props = defineProps({
    todoList: Array,
    default: [],
  });

  const emits = defineEmits(['removeTodo', 'toggleDone']);
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="(todoItem, index) in props.todoList"
      :key="index"
      :todo="todoItem"
      @removeTodo="emits('removeTodo', index)"
      @toggleDone="emits('toggleDone', index)" />
  </ul>
</template>
<style></style>
