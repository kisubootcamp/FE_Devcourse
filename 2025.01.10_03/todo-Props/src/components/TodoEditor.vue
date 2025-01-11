<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  computed: {},
  methods: {
    handleInput(event) {
      console.log(event.target.value);
    },
    addTodo() {
      if (this.inputText.trim()) {
        this.$emit("add-todo", this.inputText);
        this.inputText = "";
      }
    },
  },
};
</script>
<template>
  <div className="flex p-4">
    <input
      v-model="inputText"
      @input="handleInput"
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      @click="addTodo"
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
