<script setup>
// Props와 Emits 정의
const props = defineProps({ inputText: String });
const emit = defineEmits(["addTodo", "updateInputText"]);

// intputText 업데이트
const handleInputText = (e) => {
  emit("updateInputText", e.target.value); // 부모의 상태 업데이트
};

const handleAddTodo = () => {
  emit("addTodo", { id: Date.now(), text: props.inputText, done: false });
  emit("updateInputText", ""); // 입력한 할 일 초기화
  document.querySelector("input").focus();
};

// 할 일 목록에 새로운 할 일 추가
</script>
<template>
  <form @submit.prevent className="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      :value="inputText"
      @input="handleInputText"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="handleAddTodo"
    >
      Add Todo
    </button>
  </form>
</template>
<style></style>
