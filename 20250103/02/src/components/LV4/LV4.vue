<script>
export default {
  name: "LV4",
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
      groupedMembers: {},
    };
  },
  created() {
    this.groupedMembers = this.teamMembers.reduce((acc, member) => {
      if (!acc[member.role]) {
        acc[member.role] = [];
      }
      acc[member.role].push(member.name);
      return acc;
    }, {});
  },
};
</script>
<template>
  <ul>
    <template
      v-for="(student, idx) in students.sort((a, b) => a.age - b.age)"
      :key="idx"
    >
      <template v-for="(val, key) in student" :key="key">
        <li>{{ val }}</li>
      </template>
    </template>
  </ul>
  <hr />
  <ul>
    <template
      v-for="(product, idx) in products.filter(
        (product) => product.price >= 50000
      )"
      :key="idx"
    >
      <li>{{ product.name }}</li>
    </template>
  </ul>
  <hr />
  <ul>
    <li v-for="(category, idx) in categories" :key="idx">
      {{ category.name }}
      <ul>
        <li v-for="(item, idx) in category.items" :key="idx">
          <span v-if="typeof item === 'string'">{{ item }}</span>
          <span v-else
            >{{ item.name }}
            <ul>
              <li v-for="(val, idx) in item.items" :key="idx">
                {{ val }}
              </li>
            </ul>
          </span>
        </li>
      </ul>
    </li>
  </ul>
  <hr />
  <ul>
    <li v-for="(task, idx) in tasks">
      <input type="checkbox" :checked="task.completed" />
      {{ task.title }}
    </li>
  </ul>
  <hr />
  <div v-for="(members, role) in groupedMembers" :key="role">
    <h3>{{ role }}</h3>
    <ul>
      <li v-for="name in members" :key="name">
        {{ name }}
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
