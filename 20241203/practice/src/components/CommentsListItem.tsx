import { useId } from "react";

interface comments {
  id: number;
  text: string;
  completed: boolean;
}

export default function CommentsListItem({
  comments,
  toggleComments,
  removeComments,
}: {
  comments: comments[];
  toggleComments: (id: number) => void;
  removeComments: (id: number) => void;
}) {
  const uuid = useId();
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          id={uuid}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={comments.completed}
          onChange={() => toggleComments(comments.id)}
        />
        <label
          htmlFor={uuid}
          type="checkbox"
          className={`${comments.completed && "line-through"}`}
        >
          {comments.text}
        </label>
      </div>
      <button
        onClick={() => removeComments(comments.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        삭제
      </button>
    </li>
  );
}
