<script setup>
import { axiosInstance } from "@/api/axiosInstance";
import axios from "axios";
import { onBeforeMount, ref } from "vue";
const posts = ref(null);
const isSubmit = ref(false);

// GET
onBeforeMount(async () => {
  try {
    const { data, status } = await axiosInstance.get(`/posts`);
    if (status === 200) posts.value = data;
    else throw new Error("데이터 가져오기 실패");
  } catch (e) {
    console.error(e);
  }
});

// PUT  - 리소스를 전체 업데이트
// PATCH - 리소스를 일부 업데이트
const handlePost = async () => {
  const { data, status } = await axios.post("http://localhost:3000/posts", {
    title: "new Data",
    author: "sucoding",
  });

  if (status === 201) {
    posts.value.push(data);
  }
};

// PUT
const handlePut = async () => {
  const { data, status } = await axios.put("http://localhost:3000/posts/2", {
    title: "new Data - PUT 2",
    author: "sucoding - PUT 2",
  });

  if (status === 200) {
    posts.value = posts.value.map((post) =>
      post.id === data.id ? { ...data } : post
    );
  }
};

// PATCH
const handlePatch = async () => {
  try {
    isSubmit.value = true;
    const { data, status } = await axios.patch(
      "http://localhost:3000/posts/2",
      {
        title: "new Data - PATCH 2",
        author: "sucoding - PATCH 2",
      }
    );

    if (status !== 200) throw new Error("데이터 수정에 실패했습니다.");

    // 성공
    posts.value = posts.value.map((post) =>
      post.id === data.id ? { ...data } : post
    );
  } catch (e) {
    // 모달창, 알럿창
    console.error(e);
  }
};

//DELETE
const handleDelete = async (id) => {
  try {
    const { status } = await axios.delete("http://localhost:3000/posts/" + id);
    if (status !== 200) throw new Error("데이터 삭제에 실패했습니다.");
    posts.value = posts.value.filter((post) => post.id !== id);
  } catch (e) {
    // 모달창, 알럿창
    console.error(e);
  }
};
</script>
<template>
  <h3>Axios Basic</h3>
  <button @click="handlePost">POST</button>
  <button @click="handlePut">PUT</button>
  <button @click="handlePatch">PATCH</button>
  <button @click="handleDelete(2)">DELETE</button>
  <pre>{{ posts }}</pre>
</template>
<style scoped></style>
