<script>
export default {
  name: "Level4",
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
  <!-- 문1 -->
  <div
    v-for="student in students.sort((a, b) => b.age - a.age)"
    :key="student.name"
  >
    {{ student.name }}: {{ student.age }}
  </div>
  <!-- 문2 -->
  <div v-for="product in products" :key="product.name">
    <div v-if="product.price >= 50000">{{ product.name }}</div>
  </div>
  <!-- 문3 -->
  <ul>
    <li v-for="(categorie, index) in categories" :key="index">
      {{ categorie.name }}
      <ul>
        <li v-for="item in categorie.items" :key="item">
          <template v-if="typeof item === 'string'">{{ item }}</template>
          <template v-else>
            {{ item.name }}
            <ul>
              <li v-for="item in item.items" :key="item">
                {{ item }}
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </li>
  </ul>
  <!-- 문4 -->
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <label>
        <input type="checkbox" :checked="task.completed" />
        {{ task.title }}
      </label>
    </li>
  </ul>
  <!-- 문5 -->
  <ul>
    <li
      v-for="(members, key) in teamMembers.reduce((acc, member) => {
        if (!acc[member.role]) {
          acc[member.role] = [];
        }
        acc[member.role].push(member);
        return acc;
      }, {})"
      :key="key"
    >
      <h3>{{ key }}</h3>
      <ul>
        <li v-for="(member, index) in members" :key="index">
          {{ member.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
