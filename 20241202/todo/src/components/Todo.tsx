import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  const { todos } = state;
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...todos, action.value] };
    case "DELETE_TODO":
      return { todos: todos.filter((todo) => todo.id !== action.value.id) };
    case "UPDATE_TODO":
      const copiedTodos = [...todos];
      const modifiedTodos = copiedTodos.map((todo) =>
        todo.id === action.value.id ? { ...todo, ...action.value } : todo
      );
      return { todos: modifiedTodos };
    default:
      return state;
  }
};

const initialState: ReducerState = {
  todos: [],
};

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}
