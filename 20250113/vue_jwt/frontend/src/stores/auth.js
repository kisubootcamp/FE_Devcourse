import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const isLoggedIn = ref(false);
    const accessToken = ref("");
    const login = (token) => {
      isLoggedIn.value = true;
      accessToken.value = token;
    };
    const logout = () => {
      isLoggedIn.value = false;
      accessToken.value = "";
    };
    return {
      isLoggedIn,
      accessToken,
      login,
      logout,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ["isLoggedIn", "accessToken"],
    },
  }
);
