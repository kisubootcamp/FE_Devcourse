import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzEzMWY0YjVkMDNiZGExZDk1NWFkODNhZmM3NjQ2NCIsIm5iZiI6MTY3Mzg2Mjc4Mi41NzMsInN1YiI6IjYzYzUxZTdlYTY3MjU0MDA4NzE4YzhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4dEegbZFSOUMmHP-pqBVJzbr1ASaV2WGueEL94n8ls",
          },
        }
      );
      setData(data);
      setLoading(false);
    } catch {
      setIsError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>Error!</h1>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
