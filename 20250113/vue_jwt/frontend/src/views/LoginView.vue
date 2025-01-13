<script setup>
import { axiosInstance } from "@/api/axiosInstance";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();
const handleLogin = async () => {
  const { data, status } = await axiosInstance.post("/login", {
    username: "test",
    password: "1234",
  });

  if (status === 200) {
    authStore.login(data.accessToken);
    router.replace("/");
  } else {
    alert("로그인 실패");
  }
};
</script>
<template>
  <h1>Login View</h1>
  <button @click="handleLogin">로그인</button>
</template>
<style scoped></style>
