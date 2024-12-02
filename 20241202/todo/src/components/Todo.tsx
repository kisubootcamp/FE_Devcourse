import { useRef, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const todoSample = [
  {
    id: 0,
    content: "할 일 1",
    completed: false,
  },
  {
    id: 1,
    content: "할 일 2",
    completed: false,
  },
  {
    id: 2,
    content: "할 일 3",
    completed: false,
  },
];

export default function Todo() {
  //인풋요소
  const inputRef = useRef<HTMLInputElement>(null);
  //인풋 내용 관리
  const [input, setInput] = useState<string>("");
  //투두리스트 상태
  const [todos, setTodos] = useState<todoType[]>(todoSample);

  // 투두리스트 추가 함수
  const addTodo = (value: string) => {
    //마지막 배열 인덱스 번호
    const lastIndex = todos[todos.length - 1].id + 1;

    if (value.trim() === "") {
      alert("내용을 입력해 주세요");
      inputRef.current?.focus();
    } else
      setTodos((todos) => [
        ...todos,
        { id: lastIndex, content: value, completed: false },
      ]);
    setInput("");
    inputRef.current?.focus();
  };

  //투두리스트 삭제 함수
  const delTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  //투두리스트 체크 상태
  const checkedTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor
        input={input}
        setInput={setInput}
        addTodo={addTodo}
        inputRef={inputRef}
      />
      <TodoList todos={todos} delTodo={delTodo} checkedTodo={checkedTodo} />
    </div>
  );
}
