<script>
export default {
  name: "Lecture3",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "전자제품",
          products: [
            {
              id: 1,
              name: "스마트폰",
              isAvailable: true,
              options: [
                { id: 1, name: "블랙", inStock: true },
                { id: 2, name: "화이트", inStock: false },
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
  <!--
    <template> 태그는 DOM에 렌더링없이 사용할 앨리먼트들에 대한 위치기술을 위해(placeholder)로 사용할 수 있다
    단, <template> 의 이런 특수한 취급은 다음 디렉티브들과 함께 사용될때만 적용된다
    # v-if, v-else-if, or v-else
    # v-for
    # v-slot
  -->
  <div>
    <template v-for="category in categories" :key="category.id">
      <h2>{{ category.name }}</h2>
      <template v-for="product in category.products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <template v-for="option in product.options" :key="option.id">
          <p>{{ option.name }}</p>
          <!-- <p v-if="option.inStock">{{ option.name }}</p> -->
        </template>
      </template>
    </template>
  </div>
</template>
<style></style>
