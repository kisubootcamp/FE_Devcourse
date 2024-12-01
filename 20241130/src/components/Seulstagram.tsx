import { useState } from "react";
import undoIcon from "../assets/images/undo.svg";
import deletIcon from "../assets/images/delete.svg";

export default function Seulstagram() {
  const initialPictures = [
    "https://i.pinimg.com/736x/b0/1a/22/b01a223e9bd7f0dd30e83f1f32260f32.jpg",
    "https://i.pinimg.com/736x/7a/05/df/7a05dfa9e6a5612c8e1f06acdf58b984.jpg",
    "https://i.pinimg.com/736x/3c/91/65/3c91650a5b63599307f60bbe4b64958b.jpg",
    "https://i.pinimg.com/736x/ab/d9/4c/abd94c2d5f4caa9a636336c19df2bd01.jpg",
    "https://i.pinimg.com/736x/91/21/41/9121418f220f5f31539026fd72a6fb23.jpg",
    "https://i.pinimg.com/736x/01/7e/2e/017e2ec446ae4735799758d83b9e1097.jpg",
  ];

  type DeletedPictureInfo = {
    url: string;
    index: number;
  };

  const [pictures, setPictures] = useState(initialPictures);
  const [deletedPictures, setDeletedPictures] = useState<DeletedPictureInfo[]>(
    []
  );

  const handleDelete = (index: number) => {
    const deletedPicture = pictures[index];

    const newpictures = pictures.filter((_, i) => i !== index);

    setPictures(newpictures);

    setDeletedPictures([...deletedPictures, { url: deletedPicture, index }]);
  };

  const handleUndo = () => {
    if (deletedPictures.length === 0) return; // -1 방지

    const lastDeleted = deletedPictures[deletedPictures.length - 1];

    const newDeletedPictures = deletedPictures.slice(0, -1);

    const newpictures = [...pictures];

    if (lastDeleted.index > newpictures.length) {
      newpictures.push(lastDeleted.url);
    } else {
      newpictures.splice(lastDeleted.index, 0, lastDeleted.url);
    }

    setPictures(newpictures);
    setDeletedPictures(newDeletedPictures);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SEULSTAGRAM</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handleUndo}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          >
            <img src={undoIcon} alt="undo icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {pictures.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button
              onClick={() => handleDelete(index)}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
            >
              <img src={deletIcon} alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
