import { useEffect } from "react";
import { useFetchAll } from "../../store/ApiStore";
import MovieSection from "./MovieSection";

export default function MovieArea() {
  useEffect(() => {
    getFetchAll();
  }, []);

  const allData = useFetchAll((state) => state.allData);
  const isError = useFetchAll((state) => state.isError);
  const getFetchAll = useFetchAll((state) => state.getFetchAll);
  const MOVIE_LISTS = useFetchAll((state) => state.MOVIE_LISTS);

  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      {allData?.map((e, i) => (
        <MovieSection
          Data={e}
          isError={isError}
          MOVIE_LISTS={MOVIE_LISTS[i]}
          key={e.total_pages}
        />
      ))}
    </article>
  );
}
