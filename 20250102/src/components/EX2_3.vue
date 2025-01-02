<script>
export default {
  name: "EX2_3",
  data() {
    return {
      role: "viewer",
    };
  },
};
</script>

<template>
  <div>
    <select v-model="role">
      <option value="admin">Admin</option>
      <option value="editor">Editor</option>
      <option value="viewer">Viewer</option>
    </select>

    <p v-if="role === 'admin'">관리자 메뉴를 표시합니다.</p>
    <p v-else-if="role === 'editor'">편집자 메뉴를 표시합니다.</p>
    <p v-else>읽기 전용 메뉴를 표시합니다.</p>
  </div>
</template>
