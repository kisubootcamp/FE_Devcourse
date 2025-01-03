import axios from "axios";
import { useAuthStore } from "../store/authStore";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

let retry = false;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403) {
      console.log("token 실패");
      retry = true;
      try {
        const { data } = await axiosInstance.post("/token");
        useAuthStore.setState({
          accessToken: data.accessToken,
          isLoggedIn: true,
        });
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
  }
);
