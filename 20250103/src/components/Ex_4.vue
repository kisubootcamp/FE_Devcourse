<script>
export default {
  name: "Ex_4",
  data() {
    return {
      // Q4_1
      students: [
        { name: "홍길동", age: 20 },
        { name: "김철수", age: 25 },
        { name: "이영희", age: 22 },
      ],
      // Q4_2
      products: [
        { name: "노트북", price: 100000 },
        { name: "모니터", price: 45000 },
        { name: "스마트폰", price: 60000 },
      ],
      // Q4_3
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
      // Q4_4
      tasks: [
        { title: "Vue 공부하기", completed: false },
        { title: "프로젝트 작업", completed: true },
        { title: "운동하기", completed: false },
      ],
      // Q4_5
      teamMembers: [
        { name: "홍길동", role: "개발자" },
        { name: "김철수", role: "디자이너" },
        { name: "이영희", role: "개발자" },
        { name: "박지민", role: "기획자" },
      ],
    };
  },
  computed: {
    // Q4_1
    sortedStudents() {
      return [...this.students].sort((a, b) => a.age - b.age);
    },
    // Q4_2
    filteredProducts() {
      return this.products.filter((product) => product.price >= 50000);
    },
    // Q4_5
    groupedMembers() {
      const groups = {};
      this.teamMembers.forEach((member) => {
        if (!groups[member.role]) {
          groups[member.role] = [];
        }
        groups[member.role].push(member);
      });
      return groups;
    },
  },
};
</script>
<template>
  <div>
    <!-- Q4_1 -->
    <ul>
      <li v-for="student in sortedStudents" :key="student">
        {{ student.name }}: {{ student.age }}
      </li>
    </ul>
    <!-- Q4_2 -->
    <ul>
      <li v-for="product in filteredProducts" :key="product">
        {{ product.name }}: {{ product.price }}원
      </li>
    </ul>
    <!-- Q4_3 -->
    <ul>
      <li v-for="(item, idx) in categories" :key="idx">
        {{ item.name }}
        <ul v-if="Array.isArray(item.items)">
          <li v-for="(item, idx) in item.items" :key="idx">
            <template v-if="item.items">
              {{ item.name }}
              <ul>
                <li v-for="(item, idx) in item.items" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </template>
            <template v-else>
              {{ item }}
            </template>
          </li>
        </ul>
      </li>
    </ul>
    <!-- Q4_4 -->
    <ul>
      <li v-for="(task, idx) in tasks" key="idx">
        <input type="checkbox" /> {{ task.title }}
      </li>
    </ul>
    <!-- Q4_5 -->
    <div v-for="(members, role) in groupedMembers" :key="role">
      <h3>{{ role }}</h3>
      <ul>
        <li v-for="member in members" :key="member.name">
          {{ member.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
