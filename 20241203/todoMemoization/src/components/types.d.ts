type AddBtnType = (todo: string) => void;

interface TodoListProps {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
