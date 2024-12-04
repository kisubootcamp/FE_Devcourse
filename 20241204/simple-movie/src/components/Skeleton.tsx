export default function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="rounded-md w-full h-[357px] bg-gray-300"></div>

      <div className="h-6 bg-gray-300 rounded mt-4 mb-2 w-3/4"></div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-10"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-8"></div>
      </div>
    </div>
  );
}
