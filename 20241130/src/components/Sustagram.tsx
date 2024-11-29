import { useState } from "react";
const picture = [
  "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
];
export default function Sustagram() {
  const [pictureList, setPictureList] = useState(picture); // 사진리스트
  const [deleteList, setDeleteList] = useState<[string, number][]>([]); // 삭제할 리스트

  // 삭제로직
  const deleteHandler = (value: string, index: number) => {
    const newList = pictureList.filter((item) => item !== value); // 필터를 통해서 아이템 삭제
    setPictureList(newList);
    setDeleteList((prev) => [...prev, [value, index]]); // 삭제하는 데이터의 src와 index deleteList에 배열형태로 저장
  };

  // 복구로직
  const resetHandler = () => {
    if (deleteList.length === 0) return; // 삭제할 데이터가 없으면 바로 return
    const [value, index] = deleteList[deleteList.length - 1]; // 스텍처럼 젤 최근에 넣은 데이터를 꺼내기
    setDeleteList((prev) => prev.slice(0, -1)); // 젤 최근에 푸시한 데이터 삭제
    setPictureList((prev) => {
      const newList = [...prev]; // 이전 데이터 복제
      newList.splice(index, 0, value); // 이전의 삭제되었던 index 기준으로 그 자리에 추가
      return newList;
    });
  };
  return (
    <div className="w-full max-w-4xl px-4 py-6 mx-auto">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-full whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground "
            onClick={resetHandler}
          >
            <img src="/undo.svg" alt="Moon icon" className="w-5 h-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {pictureList.map((value, index) => (
          <div className="relative group" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="object-cover w-full h-full transition-opacity rounded-lg group-hover:opacity-80"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button
              className="absolute inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-white transition-colors bg-red-500 rounded-full whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-600 top-2 right-2"
              onClick={() => deleteHandler(value, index)}
            >
              <img src="/delete.svg" alt="Delete icon" className="w-4 h-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
