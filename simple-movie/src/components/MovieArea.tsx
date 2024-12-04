import MovieLists from "./MovieLists";

export default function MovieArea() {
  const categoryList = ["now_playing", "top_rated", "upcoming"];

  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      {categoryList.map((item, idx) => {
        return <MovieLists categoryName={item} key={idx} />;
      })}
    </article>
  );
}
