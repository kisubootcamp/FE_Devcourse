import axios from "axios";
import React, { useEffect } from "react";

const FetchMovie = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDkzYTllZTk2YzUwODlkMmYxNTNlNDdiOWU4YzBhYSIsIm5iZiI6MTczMzI5MTMwNS4xNjgsInN1YiI6IjY3NGZlZDI5NjU2NzAyYTc5MmZmYWRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gD5df8vcuE6tgc2uX7CbOeZ5qYOo8OCxnksHYI_SvA4",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchMovies();
  }, []);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDkzYTllZTk2YzUwODlkMmYxNTNlNDdiOWU4YzBhYSIsIm5iZiI6MTczMzI5MTMwNS4xNjgsInN1YiI6IjY3NGZlZDI5NjU2NzAyYTc5MmZmYWRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gD5df8vcuE6tgc2uX7CbOeZ5qYOo8OCxnksHYI_SvA4",
  //       },
  //     };

  //     try {
  //       const response = await fetch(
  //         "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  //         options
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error occured:", error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);
  return <div>Fetch Movie</div>;
};

export default FetchMovie;
