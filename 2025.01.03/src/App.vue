<script>
import Ex3 from "./components/Ex3.vue";
import Ex4 from "./components/Ex4.vue";
import Vmodel from "./components/Vmodel.vue";
export default {
  name: "App",
  components: {
    Ex3,
    Ex4,
    Vmodel,
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "전자제품",
          product: [
            {
              id: 1,
              name: "스마트폰",
              isAvailable: true,
              option: [
                { id: 1, name: "블랙", inStock: true },
                { id: 2, name: "화이트", inStock: true },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <Ex3 />
  <hr />
  <Ex4 />
  <hr />
  <Vmodel />
  <hr />
  <template v-for="category in categories" :key="category.id">
    <h2>{{ category.name }}</h2>
    <template v-for="product in category.product" :key="product.id">
      <h3>{{ product.name }}</h3>
      <template v-for="option in product.option" :key="option.id">
        <span v-if="option.inStock">{{ option.name }}</span>
      </template>
    </template>
  </template>
</template>
<style scoped></style>

<!-- 스타일적용하기 -->
<!-- <script setup>
import { styled } from "@vue-styled-components/core";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 9999px;
  background-color: #4c5a6d;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
</script>

<template>
  <StyledDiv>Hello World!</StyledDiv>
</template> -->

<!-- <script>
import First from "./components/First.vue";

export default {
  name: "App",
  components: {
    First,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <button class="btn-primary">로그인</button>
</template>
<style scoped></style> -->
