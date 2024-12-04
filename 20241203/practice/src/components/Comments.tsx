import { useState } from "react";
import CommentsEditor from "./CommentsEditor";
import CommentsList from "./CommentsList";

interface comments {
  id: number;
  text: string;
  completed: boolean;
}

export default function Comments() {
  const [comments, setComments] = useState<comments[]>([]);

  const addComments = (text: string) => {
    setComments((comments) => [
      ...comments,
      { id: Date.now(), text: text, completed: false },
    ]);
  };

  const toggleComments = (id: number) => {
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, completed: !comment.completed }
          : comment
      )
    );
  };

  const removeComments = (id: number) => {
    setComments((comments) => comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <CommentsEditor addComments={addComments} />
      <CommentsList
        comments={comments}
        toggleComments={toggleComments}
        removeComments={removeComments}
      />
    </div>
  );
}
