import { useState } from "react";
import { images } from "../assets/images/images";
import Header from "./Header";
import Image from "./Image";
const imgArr = Object.values(images);

export default function Sustagram() {
  const [images, setImages] = useState<string[]>(imgArr);
  const [deletedImg, setDeletedImg] = useState<string[]>([]);

  console.log(deletedImg);

  const handleDeleteImg = (value: string) => {
    setImages((prevImages) => [
      ...prevImages.filter((image) => image !== value),
    ]);
    setDeletedImg((prevDeletedImg) => [...prevDeletedImg, value]);
  };

  const handleRecoverImg = () => {
    if (deletedImg.length === 0) return;
    setImages((images) => {
      if (deletedImg.length === 1) {
        setDeletedImg([]);
        return imgArr;
      }
      const [recoverImg, ...restImg] = deletedImg;
      setDeletedImg(restImg);

      const index = imgArr.indexOf(recoverImg);
      const result = [
        ...images.slice(0, index),
        recoverImg,
        ...images.slice(index),
      ];
      return result;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <Header onRecoverImg={handleRecoverImg} />
      <div className="grid grid-cols-3 gap-4">
        {images.map((value, index) => (
          <Image
            key={index}
            value={value}
            index={index}
            onDeleteImg={handleDeleteImg}
          />
        ))}
      </div>
    </div>
  );
}
