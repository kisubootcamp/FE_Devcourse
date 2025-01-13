<script setup>
const props = defineProps({
  todo: Object,
  deleteTodo: Function,
  toggleTodo: Function,
});
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        @change="props.toggleTodo(props.todo.id)"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
      />
      <span>{{ props.todo.todo }}</span>
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="props.deleteTodo(props.todo.id)"
    >
      Delete
    </button>
  </li>
</template>
<style></style>
