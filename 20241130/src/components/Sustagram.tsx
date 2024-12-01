import { useRef, useState } from "react";

export default function Sustagram() {
  const picture = [
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
    },
    {
      id: 6,
      src: "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
    },
  ];
  const [pics, setPics] = useState(picture);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [deleted, setDeleted] = useState<{ id: number; src: string }[]>([]);

  const deleteHandler = (index: number) => {
    const targetSrc = imgRefs.current[index]?.src;
    const targetId = imgRefs.current[index]?.id;
    setPics(pics.filter((pic) => pic.src !== targetSrc));
    setDeleted((prev) => [
      ...prev,
      { id: Number(targetId), src: String(targetSrc) },
    ]);
  };

  const handleUndo = () => {
    if (deleted.length > 0) {
      const recentDeleted = deleted[deleted.length - 1];
      setPics((prev) => [...prev, recentDeleted].sort((a, b) => a.id - b.id));
      setDeleted((prev) => prev.slice(0, -1));
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleUndo}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          >
            <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {pics.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value.src}
                id={String(value.id)}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
                ref={(el) => (imgRefs.current[index] = el)}
              />
            </a>
            <button
              onClick={() => deleteHandler(index)}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
            >
              <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
