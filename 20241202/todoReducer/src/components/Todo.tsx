import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todosReducer } from "./reducer/reducer";

export default function Todo() {
  const [todos, todosDispatch] = useReducer(todosReducer, []);

  const handleAddTodo = (newTodo: string) =>
    todosDispatch({ type: "ADD", payload: newTodo });
  const handleDeleteTodo = (deleteTodo: string) =>
    todosDispatch({ type: "DELETE", payload: deleteTodo });

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor handleAdd={handleAddTodo} />
      <TodoList todos={todos} handleDelete={handleDeleteTodo} />
    </div>
  );
}
