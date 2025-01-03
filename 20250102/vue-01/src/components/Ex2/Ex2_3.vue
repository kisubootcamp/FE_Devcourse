<script>
export default {
  name: 'Ex2_3',
  data() {
    return {
      role: 'viewer'
    };
  },
};
</script>
<template>
  <h2>Lv2. 3번</h2>

  <nav v-if="role === 'admin'">
    <ul>
      <li>관리자 메뉴1</li>
      <li>관리자 메뉴2</li>
    </ul>
  </nav>
  <nav v-else-if="role === 'editor'">
    <ul>
      <li>편집자 메뉴1</li>
      <li>편집자 메뉴2</li>
    </ul>
  </nav>
  <nav v-else-if="role === 'viewer'">
    <ul>
      <li>메뉴1</li>
      <li>메뉴2</li>
    </ul>
  </nav>

  <hr />
</template>
<style scoped>
  
</style>