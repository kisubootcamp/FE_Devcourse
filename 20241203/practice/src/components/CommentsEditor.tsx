import { useState } from "react";

export default function CommentsEditor({
  addComments,
}: {
  addComments: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const addHandler = () => {
    if (!text) return;
    addComments(text);
    setText("");
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    addHandler();
  };

  return (
    <>
      <form className="flex p-4">
        <input
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && keyDownHandler(e)}
        ></input>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
          onClick={addHandler}
        ></button>
      </form>
    </>
  );
}
