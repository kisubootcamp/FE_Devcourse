<script setup>
// props와 emit 정의
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["toggle-todo", "delete-todo"]);
</script>

<template>
  <li class="flex items-center justify-between p-3 transition-colors border-t hover:bg-gray-100">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="() => emit('toggle-todo', todo.id)"
      class="w-4 h-4 mr-3 text-blue-500 focus:ring-blue-400"
    />
    <span
      class="flex-grow ml-2"
      :class="{ 'line-through text-gray-400': todo.completed }"
    >
      {{ todo.text }}
    </span>
    <button
      @click="() => emit('delete-todo', todo.id)"
      class="ml-4 text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  </li>
</template>
<style></style>
