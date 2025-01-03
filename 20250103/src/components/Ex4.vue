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
  <!-- 1 -->
  <ul>
    <li
      v-for="(student, idx) in students.sort((a, b) => a.age - b.age)"
      :key="idx"
    >
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>

  <!-- 2 -->
  <ul>
    <template v-for="(product, idx) in products" :key="idx">
      <li v-if="product.price >= 50000">{{ product.name }}</li>
    </template>
  </ul>

  <!-- 3 -->
  <ul>
    <li v-for="(category, index) in categories" :key="index">
      <span>{{ category.name }}</span>
      <ul>
        <li v-for="item in category.items" :key="item">
          <template v-if="typeof item === 'string'">{{ item }}</template>
          <template v-else>
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
  <!-- 4 -->
  <template v-for="(task, idx) in tasks" :key="idx">
    <label>
      {{ task.title }}
      <input type="checkbox" :checked="task.completed" />
    </label>
  </template>

  <!-- 5 -->
  <div>
    <h3>개발자</h3>
    <ul>
      <template v-for="(member, idx) in teamMembers" :key="idx">
        <li v-if="member.role === '개발자'">{{ member.name }}</li>
      </template>
    </ul>

    <h3>디자이너</h3>
    <ul>
      <template v-for="(member, idx) in teamMembers" :key="idx">
        <li v-if="member.role === '디자이너'">{{ member.name }}</li>
      </template>
    </ul>

    <h3>기획자</h3>
    <ul>
      <template v-for="(member, idx) in teamMembers" :key="idx">
        <li v-if="member.role === '기획자'">{{ member.name }}</li>
      </template>
    </ul>
  </div>
</template>
<style scoped></style>
