import { useReducer } from "react";
import { TodoItemType, TodoReducerAction } from "../types/todo";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const reducer = (state: TodoItemType[], action: TodoReducerAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { todo: action.payload, done: false }];
    case "TOGGLE_TODO":
      return state.map((_, index) => {
        if (index === action.payload) {
          return { ...state[index], done: !state[index].done };
        }
        return state[index];
      });
    case "DELETE_TODO":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todoList={state} dispatch={dispatch} />
    </div>
  );
}
