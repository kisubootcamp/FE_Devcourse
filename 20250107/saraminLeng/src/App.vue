<script>
import Editor from "@/components/Editor.vue";
export default {
  name: "App",
  components: {
    Editor,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <main class="w-full flex flex-col items-center px-4 py-10">
    <section class="w-full max-w-[600px]">
      <h1 class="font-bold text-2xl mb-5">글자수 세기</h1>
      <Editor />
    </section>
  </main>
</template>
<style scoped></style>
