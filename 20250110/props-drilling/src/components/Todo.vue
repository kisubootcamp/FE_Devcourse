<script setup>
import { provide, reactive, ref, watchEffect } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

// 입력한 할 일
const inputText = ref("");

// 할 일 목록, 초기값 로컬스토리지에서 가져오기
const todoList = reactive(JSON.parse(localStorage.getItem("todoList")) || []);

// 할 일 목록 업데이트 될 때마다 로컬스토리지 저장
watchEffect(() => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
});

// 할 일 목록에 입력한 할 일을 추가하는 함수
const addTodo = (todo) => {
  if (!todo.text.trim()) {
    alert("할 일을 입력해주세요.");
    return;
  }
  todoList.push(todo);
};

// 자식이 보낸 새로운 inputText를 부모 상태로 업데이트
const updateInputText = (newText) => {
  inputText.value = newText;
};

// 할 일 토글
const toggleDone = (id) => {
  const todo = todoList.find((todo) => todo.id === id);
  todo.done = !todo.done;
};

//할 일 삭제
const deleteTodo = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  todoList.splice(index, 1);
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor
      :inputText="inputText"
      @updateInputText="updateInputText"
      @addTodo="addTodo"
    />
    <TodoList
      :todoList="todoList"
      @toggleDone="toggleDone"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>
<style></style>
