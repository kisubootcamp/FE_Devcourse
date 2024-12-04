import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWY5OGU5YmUwNDc1Mzg3OWNjMzI2Y2E4OWU5ODkyYSIsIm5iZiI6MTczMzMzOTIzOS4wNzksInN1YiI6IjY3NTBhODY3NWFjZTk4YmE0NmQ0ODAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqHT8qxlPk5CKq0p1dNdH5BirBRvqxDINtncdfwU38A",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <div>FetchMovie</div>;
}
