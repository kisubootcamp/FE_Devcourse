import { useAuthStore } from "@/stores/auth";
import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  const accessToken = authStore.accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

let retry = false;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore();
    // 응답에 에러가 발생하면 실행됨
    const originRequest = error.config;
    // 403 응답받아서 실패한거라면 토큰이 유효하지 않다는 거야
    if (error.response?.status === 403 && !retry) {
      retry = true;
      // 토큰을 재발급해줄 수 있는 로직 구현
      try {
        const { data, status } = await axiosInstance.post("/token");
        if (status !== 200) {
          throw new Error("Failed to refresh token");
        }
        authStore.login(data.accessToken);
        originRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        retry = false;
        return axiosInstance(originRequest);
      } catch (error) {
        await axiosInstance.post("/logout");
        authStore.logout();
      }
    }
    return Promise.reject(error); // 에러를 그냥 반환
  }
);
