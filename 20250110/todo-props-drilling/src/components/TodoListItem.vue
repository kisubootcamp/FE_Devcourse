<script setup>
  const props = defineProps({
    todo: {
      type: Object,
      required: true,
    },
  });

  const emits = defineEmits(['removeTodo', 'toggleDone']);
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
    <div className="flex items-center">
      <input
        :checked="props.todo.done"
        type="checkbox"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        @click="emits('toggleDone')" />
      <span>{{ props.todo.data }}</span>
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="emits('removeTodo')">
      Delete
    </button>
  </li>
</template>
<style></style>
