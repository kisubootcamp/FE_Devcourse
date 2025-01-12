<script setup>
const props = defineProps({
  text: String,
  handleChange: Function,
  handleSubmit: Function,
});
</script>
<template>
  <form className="flex p-4" @submit.prevent="props.handleSubmit">
    <input
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      :value="props.text"
      @input="(event) => props.handleChange(event)"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </form>
</template>
<style></style>
