import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";

export default function Todo() {
  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
      <TodoHeader />
      <TodoEditor />
    </div>
  );
}