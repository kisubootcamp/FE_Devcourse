<script>
export default {
  props: {
    todo: Object,
  },
};
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        :checked="todo.completed"
        @change="$emit('toggle-todo', todo.id)"
        type="checkbox"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
      />
      <span >{{todo.text}}</span>
    </div>
    <button 
      @click="$emit('delete-todo', todo.id)"
      className="text-red-500 hover:text-red-700 ml-4">Delete</button>
  </li>
</template>
<style></style>
