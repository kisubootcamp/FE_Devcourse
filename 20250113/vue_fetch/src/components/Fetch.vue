<script setup>
import { onBeforeMount, ref } from "vue";
const posts = ref(null);
const isSubmit = ref(false);
const isLoading = ref(true);

// GET
onBeforeMount(async () => {
  const response = await fetch("http://localhost:3000/posts");
  const data = await response.json();
  posts.value = data;
  isLoading.value = false;
});

// PUT  - 리소스를 전체 업데이트
// PATCH - 리소스를 일부 업데이트
const handlePost = async () => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "new Data",
      author: "sucoding",
    }),
  });

  if (response.ok) {
    const data = await response.json();
    posts.value.push(data);
  }
};

// PUT
const handlePut = async () => {
  const response = await fetch("http://localhost:3000/posts/2", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "new Data - PUT 2",
      author: "sucoding - PUT 2",
    }),
  });

  if (response.ok) {
    const data = await response.json();
    posts.value = posts.value.map((post) =>
      post.id === data.id ? { ...data } : post
    );
  }
};

// PATCH
const handlePatch = async () => {
  try {
    isSubmit.value = true;
    const response = await fetch("http://localhost:3000/posts/2", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "new Data - PATCH 2",
        author: "sucoding - PATCH 2",
      }),
    });

    if (!response.ok) throw new Error("데이터 수정에 실패했습니다.");

    // 성공
    const data = await response.json();
    posts.value = posts.value.map((post) =>
      post.id === data.id ? { ...data } : post
    );
  } catch (e) {
    // 모달창, 알럿창
    console.error(e);
  }
};

//DELETE
// NetWork
// -> 아예 서버에 도달하지도 못한것 (ex. api 주소가 잘못되었을 때)
// -> 서버에는 도달했지만, 적절한 응답을 받지 못한 경우
const handleDelete = async (id) => {
  try {
    const response = await fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    });

    console.log(response);
    if (!response.ok) throw new Error("데이터 삭제에 실패했습니다.");
    posts.value = posts.value.filter((post) => post.id !== id);
  } catch (e) {
    // 모달창, 알럿창
    console.error(e);
  }
};
</script>
<template>
  <h3>Fetch Basic</h3>
  <button @click="handlePost">POST</button>
  <button @click="handlePut">PUT</button>
  <button @click="handlePatch">PATCH</button>
  <button @click="handleDelete(2)">DELETE</button>
  <pre v-if="!isLoading">{{ posts }}</pre>
  <p v-else>loading...</p>
</template>
<style scoped></style>
