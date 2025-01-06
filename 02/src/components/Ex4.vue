<script>
export default {
  name: "Ex4",
  data() {
    return {
      students: [
        { name: "홍길동", age: 20 },
        { name: "김철수", age: 25 },
        { name: "이영희", age: 22 },
      ],
      products: [
        { name: "노트북", price: 100000 },
        { name: "모니터", price: 45000 },
        { name: "스마트폰", price: 60000 },
      ],
      categories: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        {
          name: "Vegetables",
          items: [
            "Carrot",
            "Broccoli",
            { name: "Leafy Vegetables", items: ["Spinach", "Lettuce"] },
          ],
        },
      ],
      tasks: [
        { title: "Vue 공부하기", completed: false },
        { title: "프로젝트 작업", completed: true },
        { title: "운동하기", completed: false },
      ],
      teamMembers: [
        { name: "홍길동", role: "개발자" },
        { name: "김철수", role: "디자이너" },
        { name: "이영희", role: "개발자" },
        { name: "박지민", role: "기획자" },
      ],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="student in students.sort((a, b) => a.age - b.age)">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>

  <ul>
    <li v-for="product in products.filter((product) => product.price >= 50000)">
      {{ product.name }} : {{ product.price }}
    </li>
  </ul>

  <ul>
    <template v-for="category in categories">
      <li>
        <h1>{{ category.name }}</h1>
        <ul>
          <li v-for="item in category.items">
            <template v-if="typeof item === 'string'">
              <h2>{{ item }}</h2>
            </template>
            <template v-else>
              <h3>{{ item.name }}</h3>
              <ul>
                <template v-for="i in item.items">
                  <li>{{ i }}</li>
                </template>
              </ul>
            </template>
          </li>
        </ul>
      </li>
    </template>
  </ul>

  <ul>
    <li v-for="task in tasks">
      <input type="checkbox" :checked="task.completed" />
      {{ task }}
    </li>
  </ul>

  <h1>개발자</h1>
  <ul>
    <template v-for="member in teamMembers">
      <li v-if="member.role === '개발자'">
        {{ member.name }}
      </li>
    </template>
  </ul>
  <h1>디자이너</h1>
  <ul>
    <template v-for="member in teamMembers">
      <li v-if="member.role === '디자이너'">
        {{ member.name }}
      </li>
    </template>
  </ul>
  <h1>기획자</h1>
  <ul>
    <template v-for="member in teamMembers">
      <li v-if="member.role === '기획자'">
        {{ member.name }}
      </li>
    </template>
  </ul>
</template>
<style scoped></style>
