export default async function fetchNowPlaying() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWQwZmVhNzk5YzJmZGQ5ODM3M2IxZmYyNmVlZmI0OCIsIm5iZiI6MTczMzI5MTI4NC4yNTEwMDAyLCJzdWIiOiI2NzRmZWQxNDY1NjcwMmE3OTJmZmFkYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HKmmrygnyLmLzdIy2t4wlUZvjpFbIlinA7hhFYIV50E",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  );
  const data: NowPlayingResponse = await response.json();

  return data.results
    .filter((_, i) => i < 20)
    .map((nowPlaying: NowPlayingMovie) => ({
      id: nowPlaying.id,
      title: nowPlaying.title,
      poster_path: nowPlaying.poster_path,
      vote_average: nowPlaying.vote_average,
    }));
}
