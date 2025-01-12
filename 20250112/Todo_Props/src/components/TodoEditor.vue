<script>
export default {
  props: {
    addTodo: Function,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addHandler() {
      if (this.text.trim()) {
        this.addTodo(this.text);
        this.text = "";
      }
    },
  },
};
</script>

<template>
  <div className="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      v-model="text"
      @keydown.enter="addHandler"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      @click="addHandler"
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </div>
</template>

<style></style>
