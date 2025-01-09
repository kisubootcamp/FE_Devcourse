import CommentsListItem from "./CommentsListItem";

interface comments {
  id: number;
  text: string;
  completed: boolean;
}

export default function CommentsList({
  comments,
  toggleComments,
  removeComments,
}: {
  comments: comments[];
  toggleComments: (id: number) => void;
  removeComments: (id: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {comments.length > 0 &&
        comments.map((comment) => (
          <CommentsListItem
            key={comments.id}
            comments={comments}
            toggleComments={toggleComments}
            removeComments={removeComments}
          />
        ))}
      ;
    </ul>
  );
}
