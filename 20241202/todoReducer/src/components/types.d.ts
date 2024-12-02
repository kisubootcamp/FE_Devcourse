type AddBtnType = (todo: string) => void;

interface TodoListProps {
  todos: string[];
  handleDelete: (todo: string) => void;
}

interface TodoItemProps {
  todo: string;
  handleDelete: (todo: string) => void;
}

interface TodosAction {
  type: string;
  payload: string;
}
interface ToDoAction {
  type: string;
  payload: string;
}
