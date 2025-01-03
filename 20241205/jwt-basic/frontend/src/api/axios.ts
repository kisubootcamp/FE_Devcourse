import axios from "axios";
import { useAuthStore } from "../stores/authStore";

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
    if (error.response?.status === 403 && !retry) {
      retry = true;
      try {
        const { data } = await axiosInstance.post("/token");
        console.log(data);
        useAuthStore.setState({
          accessToken: data.accessToken,
          isLoggedIn: true,
        });
        retry = false;
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
  }
);
