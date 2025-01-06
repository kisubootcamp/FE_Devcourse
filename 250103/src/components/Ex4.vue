<template>
  <div>
    <h1>문제1</h1>
      <ul>
        <li v-for="(student, index) in sortedStudents" :key="index">
          이름: {{ student.name }} | 나이: {{ student.age }}
        </li>
      </ul>
  </div>
  <div>
    <h1>문제2</h1>
      <ul>
        <li v-for="(product, index) in filteredProducts" :key="index">
          {{ product }}
        </li>
      </ul>
  </div>
  <div>
    <h1>문제4</h1>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.completed"/>
          {{ task.title }}
        </li>
      </ul>
  </div>
  <div>
    <h1>문제5</h1>
      <ul>
        <div v-for="(members, role) in groups" :key="role">
          <h3>{{ role }}</h3>
          <ul>
            <li v-for="(member, index) in members" :key="index">
              {{ member.name }}
            </li>
          </ul>
        </div>
      </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        students: [
        { name: '홍길동', age: 20 },
        { name: '김철수', age: 25 },
        { name: '이영희', age: 22 }
      ],
      products: [
        { name: '노트북', price: 100000 },
        { name: '모니터', price: 45000 }, 
        { name: '스마트폰', price: 60000 }
      ],
      tasks: [
          { title: 'Vue 공부하기', completed: false },
          { title: '프로젝트 작업', completed: true },
          { title: '운동하기', completed: false }
        ],
      teamMembers: [
        { name: '홍길동', role: '개발자' },
        { name: '김철수', role: '디자이너' },
        { name: '이영희', role: '개발자' },
        { name: '박지민', role: '기획자' }
      ],

      }
    },
    computed: {
      sortedStudents(){
        return [...this.students].sort((a,b) => a.age - b.age);
      },
      filteredProducts(){
        return this.products.filter((product) => product.price >= 50000)
      },
      groups(){
        return this.teamMembers.reduce((group, member) =>{
          if(!group[member.role]){
            group[member.role] = [];
          }
          group[member.role].push(member);
          return group;
        },{});
      }
    }
  }
</script>