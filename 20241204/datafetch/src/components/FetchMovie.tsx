// Fetch API 일 때
import { useEffect } from "react";

import React from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json", //어떤식으로 받아올건지
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU4NGY0MWI1ZWQ3Y2E5YTNiNDNkYTIyYWVjYmViZSIsIm5iZiI6MTczMzI5MTI3Ni4wOTUsInN1YiI6IjY3NGZlZDBjNmUxMDFkOTQ5MTFhNTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbOC1YmXjLuqsB9moY4FdTPj4taHzNCKnyT5D9ctVZc", //JWT인증 토큰
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

// axios 일 때
// import axios from 'axios';

// export default function FetchMovie() {
//   const getMovie = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://api.themoviedb.org/3/movie/now_playing',
//       params: {language: 'en-US', page: '1'},
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU4NGY0MWI1ZWQ3Y2E5YTNiNDNkYTIyYWVjYmViZSIsIm5iZiI6MTczMzI5MTI3Ni4wOTUsInN1YiI6IjY3NGZlZDBjNmUxMDFkOTQ5MTFhNTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbOC1YmXjLuqsB9moY4FdTPj4taHzNCKnyT5D9ctVZc'
//       }
//     };

//     try {
//       const response = await axios(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getMovie();
//   }, []);

//   return (
//     <div>FetchMovie</div>
//   );
// }

// async await 일 떄
// import { useEffect } from 'react';

// export default function FetchMovie() {
//   const getMovie = async () => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU4NGY0MWI1ZWQ3Y2E5YTNiNDNkYTIyYWVjYmViZSIsInN1YiI6IjY3NGZlZDBjNmUxMDFkOTQ5MTFhNTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbOC1YmXjLuqsB9moY4FdTPj4taHzNCKnyT5D9ctVZc'
//       }
//     };

//     try {
//       const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     getMovie();
//   }, [])

//   return (
//     <div>FetchMovie</div>
//   )
// }
