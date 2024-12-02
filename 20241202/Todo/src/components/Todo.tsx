import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [title, useTitle] = useState<{ text: string }>({ text: "" });
  const [titleArr, setTitleArr] = useState<string[]>([]);

  // title값 input에 따라 실시간 업데이트
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    useTitle((e: { text: string }) => {
      return { ...e, text: event.target.value };
    });
  }

  // 클릭시 title TodoList 컴포넌트 생성해주는 TitleArr에 title담기
  function handleClick() {
    if (title.text.length === 0) return;
    setTitleArr((e) => [...e, title.text]);
    useTitle(() => {
      return { text: "" };
    });
  }

  // 클릭시 해당하는 list컴포넌트 지우기(titleArr배열을 제거하는 방식)
  function deleteList(idx: number) {
    const delArr = [...titleArr];
    delArr.splice(idx, 1);
    setTitleArr(() => [...delArr]);
  }

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor
        title={title}
        changeHandler={changeHandler}
        handleClick={handleClick}
      />
      <TodoList titleArr={titleArr} deleteList={deleteList} />
    </div>
  );
}
