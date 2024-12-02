export interface TodoItemType {
  todo: string;
  done: boolean;
}

export type TodoReducerAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | {
      type: "DELETE_TODO";
      payload: number;
    };
