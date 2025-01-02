<script>
export default {
  name: "Ex1",
  data() {
    return {
      active: false,
      onclick: () => {
        this.active = true;
      },
    };
  },
};
</script>
<template>
  <button :onclick>버튼</button>
  <div v-if="active">조건이 참입니다!</div>
</template>
<style scoped></style>
