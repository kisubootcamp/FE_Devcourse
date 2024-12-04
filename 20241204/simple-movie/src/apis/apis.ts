import axios from "axios";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzk1Y2EwNDE0MTE0NzM3MGNmZmFkZjFjOTc2ZWRkNCIsIm5iZiI6MTczMzI5MTIzOS44Miwic3ViIjoiNjc0ZmVjZTc0NDg0N2U5N2RmZjQwM2YwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DjLrcmHH_hv2Y9c_Qj_N3lqwNNLcxsv5yThiGFgkARQ",
  },
};

export const getNowPlaying = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
      getOptions
    );
    return data;
  } catch {}
};

export const getUpcoming = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      getOptions
    );
    return data;
  } catch {}
};

export const getTopRated = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
      getOptions
    );
    return data;
  } catch {}
};
