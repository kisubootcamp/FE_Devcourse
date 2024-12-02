interface Todo {
  id: number;
  title: string;
  isChecked: boolean;
  isEditable: boolean;
}

interface ReducerState {
  todos: Todo[];
}

interface ReducerAction {
  type: ACTION_TYPE;
  value: Todo;
}

type ACTION_TYPE = "ADD_TODO" | "UPDATE_TODO" | "DELETE_TODO";
