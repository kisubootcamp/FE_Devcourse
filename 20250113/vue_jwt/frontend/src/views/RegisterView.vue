<script setup>
import { axiosInstance } from "@/api/axiosInstance";
import { useRouter } from "vue-router";
const router = useRouter();
const handleRegister = async () => {
  try {
    const { status } = await axiosInstance.post("/register", {
      username: "test",
      password: "1234",
    });

    if (status === 201) {
      router.push("/login");
    } else {
      throw new Error("회원가입이 실패했습니다.");
    }
  } catch (e) {
    console.error(e);
  }
};
</script>
<template>
  <h1>Register View</h1>
  <button @click="handleRegister">회원가입</button>
</template>
<style scoped></style>
