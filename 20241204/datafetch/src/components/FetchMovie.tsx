import axios from 'axios';
import { useEffect } from 'react';

export default function FetchMovie() {
  const getMovie = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViMmU0YjNkNWJiOWEwNTViN2NmZWY3Y2IyMzIxYSIsIm5iZiI6MTczMzI5MTI1My4yNTIsInN1YiI6IjY3NGZlY2Y1ZmI3Mjk4YzExYTIxNjQ5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xuEswm8yzNzpTr1TJDqE-HyLrl9Xfh3GWbMTao5qRI',
        },
      }
    );
    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <></>;
}
