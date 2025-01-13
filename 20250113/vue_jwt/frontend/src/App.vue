<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { storeToRefs } from "pinia";
const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="!isLoggedIn" to="/login">Login</RouterLink>
    <RouterLink v-if="!isLoggedIn" to="/register">Register</RouterLink>
    <RouterLink v-if="isLoggedIn" to="/user">User</RouterLink>
    <button v-if="isLoggedIn" @click="authStore.logout()">로그아웃</button>
  </nav>

  <RouterView />
</template>
<style scoped>
a {
  margin-right: 10px;
}
</style>
