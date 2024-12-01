export default function DashboardCard({
  index,
  value,
  onDeleteBtnClick,
}: IDashboardCardProps) {
  return (
    <div className="relative group">
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
        onClick={() => onDeleteBtnClick(index)}
        className="absolute inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-white transition-colors bg-red-500 rounded-full whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-600 top-2 right-2"
      >
        <img src="/delete.svg" alt="Delete icon" className="w-4 h-4" />
        <span className="sr-only">Delete</span>
      </button>
    </div>
  );
}
