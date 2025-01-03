<script>
export default {
  name: "App",
  data() {
    return {
      students : [{ name: '홍길동', age: 20 }, { name: '김철수', age: 25 }, { name: '이영희', age: 22 }],
      products : [{ name: '노트북', price: 100000 }, { name: '모니터', price: 45000 }, { name: '스마트폰', price: 60000 }],
      categories : [{ name: 'Fruits', items: ['Apple', 'Banana'] }, { name: 'Vegetables', items: ['Carrot', 'Broccoli', { name: 'Leafy Vegetables', items: ['Spinach', 'Lettuce'] }] }],
      tasks : [{ title: 'Vue 공부하기', completed: false }, { title: '프로젝트 작업', completed: true }, { title: '운동하기', completed: false }],
      teamMembers : [{ name: '홍길동', role: '개발자' }, { name: '김철수', role: '디자이너' }, { name: '이영희', role: '개발자' }, { name: '박지민', role: '기획자' }]
    };
  },
};
</script>
<template>
  <ul>
    문제 1
    <li v-for="(student, index) in students.sort((a, b) => a.age - b.age)" :key="index">
      {{ student.name }} {{ student.age }}
    </li>
  </ul>

  <hr />

  <ul>
    문제 2
    <li v-for="(product, index) in products.filter(product => product.price >= 50000)" :key="index">
      {{ product.name }} {{ product.price }}
    </li>
  </ul>

  <hr />

  <ul>
    문제 3
    <li v-for="(category, index) in categories" :key="index">
      {{ category.name }}: 
      <ul>
        <li v-for="(item, subIndex) in category.items" :key="subIndex">
          <span v-if="typeof item === 'string'">{{ item }}</span>
          <span v-else>{{ item.name }}: 
            <ul>
              <li v-for="(subItem, subSubIndex) in item.items" :key="subSubIndex">{{ subItem }}</li>
            </ul>
          </span>
        </li>
      </ul>
    </li>
  </ul>

  <hr />

  <ul>
    문제 4
    <li v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" :checked="task.completed" />
      {{ task.title }}
    </li>
  </ul>

  <hr />

  <ul>
    문제 5
    <li v-for="(role, index) in [...new Set(teamMembers.map(member => member.role))]" :key="index">
      <strong>{{ role }}</strong>
      <ul>
        <li v-for="(member, subIndex) in teamMembers.filter(member => member.role === role)" :key="subIndex">
          {{ member.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>