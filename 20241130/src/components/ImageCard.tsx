interface ImageCardProps {
  imageUrl: string;
  index: number;
  deleteHandler: (index: number) => void;
}

export default function ImageCard({
  imageUrl,
  index,
  deleteHandler,
}: ImageCardProps) {
  return (
    <div className="group relative">
      <a className="group" href="#">
        <img
          src={imageUrl}
          width="400"
          height="400"
          alt={`Photo ${index + 1}`}
          className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
          style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
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
  );
}
