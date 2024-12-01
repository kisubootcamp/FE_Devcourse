import { useState } from "react";
import { dummyPictureArr, logoTitle } from "./utils/constants";
import Header from "./components/sustargram/Header";
import Dashboard from "./components/sustargram/Dashboard/Dashboard";

export default function App() {
  const pictures = dummyPictureArr;

  const [pictureArr, setPictureArr] = useState(pictures);
  const [deletedArr, setDeletedArr] = useState<string[]>([]);

  const onDeleteBtnClick = (targetIdx: number) => {
    setDeletedArr((preDeletedArr) => [...preDeletedArr, pictureArr[targetIdx]]);
    setPictureArr((prePicArr) =>
      prePicArr.filter((_, idx) => idx !== targetIdx)
    );
  };

  const onRoleBackClick = () => {
    if (deletedArr.length === 0) return;

    const targetItem = deletedArr[0];
    setDeletedArr((prev) => prev.slice(1));
    setPictureArr((prev) => [...prev, targetItem]);
  };

  return (
    <div className="w-full max-w-4xl px-4 py-6 mx-auto">
      <Header onRoleBackClick={onRoleBackClick} logoTitle={logoTitle} />
      <Dashboard pictureArr={pictureArr} onDeleteBtnClick={onDeleteBtnClick} />
    </div>
  );
}
