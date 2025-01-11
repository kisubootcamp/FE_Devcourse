import { defineStore } from "pinia";
import { reactive, ref, watchEffect } from "vue";

export const useTodoStore = defineStore('todoStore', () => {
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
    inputText.value = "";
  };

  // 자식이 보낸 새로운 inputText를 부모 상태로 업데이트
  const handleInputText = (e) => {
    inputText.value = e.target.value;
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

  return {
    inputText,
    todoList,
    addTodo,
    handleInputText,
    toggleDone,
    deleteTodo,
  };
});