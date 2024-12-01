import { useState } from "react";
import ImageCard from "./ImageCard";

const picture = [
  "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
];

export default function Sustagram() {
  const [pictures, setPictures] = useState(picture);
  const [deletedPictures, setDeletedPictures] = useState<
    { url: string; index: number }[]
  >([]);

  const undoHandler = () => {
    const lastPictureData = deletedPictures.slice(-1)[0];

    if (lastPictureData) {
      setPictures((pictures) => [
        ...pictures.slice(0, lastPictureData.index),
        lastPictureData.url,
        ...pictures.slice(lastPictureData.index),
      ]);
      setDeletedPictures(deletedPictures.slice(0, -1));
    }
  };

  const deleteHandler = (index: number) => {
    const deletedPicture = pictures[index];
    setPictures((pictures) => pictures.filter((_, i) => i !== index));
    setDeletedPictures((deletedPictures) => [
      ...deletedPictures,
      { url: deletedPicture, index },
    ]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={undoHandler}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          >
            <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {pictures.map((value, index) => (
          <ImageCard
            key={index}
            imageUrl={value}
            index={index}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
}
