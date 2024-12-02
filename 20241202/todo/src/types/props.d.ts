interface ITodoListProps {
  todos: string[]
  setTodos:React.Dispatch<React.SetStateAction<string[]>>
}

interface ITodoListItemProps{
  todo: string;
  key: number;
  setTodos:React.Dispatch<React.SetStateAction<string[]>>
}
