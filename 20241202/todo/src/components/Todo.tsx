import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { useReducer } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "FINISH_TODO"; payload: number };

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "FINISH_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export default function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  // Todo를 추가하기
  const handleAddTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
      <TodoHeader />
      <TodoEditor onAddTodo={handleAddTodo} /> {/* onAddTodo를 전달 */}
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
