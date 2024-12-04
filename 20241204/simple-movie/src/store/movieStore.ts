import { create } from "zustand";

export const useMovieStore = create<MoiveStoreType>((set) => ({
  nowPlaying: [],
  upcoming: [],
  topRated: [],
  setNowPlaying: (movies) => set({ nowPlaying: movies }),
  setUpcoming: (movies) => set({ upcoming: movies }),
  setTopRated: (movies) => set({ topRated: movies }),

  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
