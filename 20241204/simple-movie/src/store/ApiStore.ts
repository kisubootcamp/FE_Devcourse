import { create } from "zustand";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGIwODNmMDczNjY2M2I3OGM1OTUyZjNhYWI2YzhmMyIsIm5iZiI6MTczMzIyMzc5MS40NDgsInN1YiI6IjY3NGVlNTZmMmNlNGNlN2RkNjA5NTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTDq2EB375Lw-3tx5eeMR12u_BhoygIP5pq_KICZPnA",
  },
};

const urls = [
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
];

// 전체 데이터 fetch
export const useFetchAll = create<useFetchAllType>((set) => ({
  allData: null,
  isError: false,
  MOVIE_LISTS: ["Now Playing", "Popular", "Upcoming"],
  getFetchAll: async () => {
    const datas = await Promise.all(
      urls.map((url) => fetch(url, options))
    ).then((responses) => Promise.all(responses.map((res) => res.json())));
    set(() => ({ allData: datas }));
  },
}));
