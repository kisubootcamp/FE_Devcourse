import { useReducer } from "react";
import { todoReducer } from "./reducer/reducer";
// import { todoReducer } from "./reducer/reducer";

export default function TodoEditor({ handleAdd }: { handleAdd: AddBtnType }) {
  const [todo, todoDispatch] = useReducer(todoReducer, "");

  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    handleAdd(todo);
    todoDispatch({ type: "SET_INPUT", payload: "" });
  };

  return (
    <form onSubmit={handleSubmitTodo} className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={todo}
        onChange={(e) =>
          todoDispatch({ type: "SET_INPUT", payload: e.target.value })
        }
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
        Add Todo
      </button>
    </form>
  );
}
