type Todo = {
  id: number;
  content: string;
};

type todoProps = {
  edit: (data: string) => void;
};

type toDOList = {
  todo: { id: number; content: string }[];
  setId: (id: number) => void;
};

type toDO = {
  todo: Todo;
  state: (id: number) => void;
  id: number;
};
