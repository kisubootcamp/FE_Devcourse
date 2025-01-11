<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav style="position: sticky; top: 0">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="#home">Home(#home)</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="#about">about(#bout)</RouterLink>
    <RouterLink to="/dashboard/1">Dashboard1</RouterLink>
    <RouterLink to="/dashboard/2">Dashboard2</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
a {
  margin-right: 10px;
}
</style>
