<script setup></script>
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-bind:to="{ name: 'About' }">About</RouterLink>
    <RouterLink
      :to="{
        name: 'User',
        params: { user: 'mike', id: '1' },
        query: {
          lang: 'ko',
        },
      }"
      >User</RouterLink
    >
    <RouterLink :to="{ name: 'ProductInfo' }">Product</RouterLink>
  </nav>
  <RouterView name="header" />
  <!-- <RouterView name="default" /> -->
  <RouterView />
  <RouterView name="footer" />
</template>
<style scoped>
a {
  margin: 0 10px;
}
</style>
