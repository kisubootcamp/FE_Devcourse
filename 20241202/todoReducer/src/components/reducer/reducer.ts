export function todosReducer(todos: string[], action: TodosAction) {
  switch (action.type) {
    case "ADD":
      return [...todos, action.payload];
    case "DELETE":
      return [...todos.filter((item) => item !== action.payload)];
    default:
      return todos;
  }
}

export function todoReducer(todo: string, action: ToDoAction) {
  if (action.type === "SET_INPUT") {
    return action.payload;
  }
  return todo;
}

export function checkedReducer(checked: boolean, action: any) {
  switch (action.type) {
    case "CHECK":
      return !action.payload;
    default:
      return checked;
  }
}
