interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoEditorProps {
  addTodo: (newTodoText: string) => void;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodoCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
}

interface TodoListItemProps {
  todo: Todo;
  toggleTodoCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
}
