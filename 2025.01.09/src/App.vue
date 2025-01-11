<script setup>
import LifeCycle from "./components/LifeCycle.vue";
const isShow = ref(true);
</script>
<template>
  <LifeCycle />
  <button @click="isShow = !isShow">isShow change</button>
</template>
<style scoped></style>

<!-- <script setup>
import { reactive, ref, watch } from "vue";

const num = ref(0);
watch(num, (cur, prev) => {
  console.log("num 변경");
  console.log(`현재값 : ${cur}`);
  console.log(`이전값 : ${prev}`);
});
const state = ref({ num: 0 });
watch(
  num,
  (state, prev) => {
    console.log("state.num 변경");
    console.log(`현재값 : ${cur}`);
    console.log(`이전값 : ${prev}`);
  },
  {
    deep: true,
  }
);
// const state = ref({ num: 0 });
// watch(num, (state, prev) => {
//   console.log("state.num 변경");
//   console.log(`현재값 : ${cur}`);
//   console.log(`이전값 : ${prev}`);
// });
const state2 = reactive({ num: 0 });
watch(num, (state2, prev) => {
  console.log("state2.num 변경");
  console.log(`현재값 : ${cur}`);
  console.log(`이전값 : ${prev}`);
});
</script>
<template>
  <button @click="num++">num변경</button>
  <button @click="state.num++">state.num변경</button>
  <button @click="state2.num++">state2.num변경</button>
</template>
<style scoped>
button {
  display: block;
  margin: 10px 0;
}
</style> -->

<!-- <script setup>
import { computed, ref, watch } from "vue";

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const firstName = ref("yeop");
const lastName = ref("choi");
const fullName = computed({
  get() {
    return `${lastName.value}${firstName.value}`;
  },
  set(value) {
    console.log(value);
    [lastName.value, firstName.value] = value.split("");
  },
});
const state = ref({
  num: 0,
});
const incrementState = () => state.value.num++;
const increment = () => count.value++;
watch(count, (cur, prev) => {
  console.log("count changed, cur, prev");
});
watch(state, () => {
  console.log("count state");
});
</script>
<template>
  <h1>{{ doubleCount }}</h1>
  <button @click="count++">증가</button>
  <button @click="increment">증가</button>
  <hr />
  <h1>{{ fullName }}</h1>
  <button @click="fullName = 'shinchan'">신찬</button>
</template>
<style scoped></style> -->

<!-- <script setup>

const count = ref(0);
const state = ref({ count: 0 });
const numArr = ref([1, 2, 3]);
const state2 = reactive({ count: 0 });
console.log(state.value.count);
console.log(state2.count);
</script>
<template>
  <h1>{{ count }}</h1>
  <h1>{{ state.count }}</h1>
  <h1>{{ numArr }}</h1>
  <button @click="count++">증가(count)</button>
  <button @click="state.count++">증가(state.count)</button>
  <button @click="numArr.push(4)">4 추가</button>
  <hr />
  <h1>{{ state2.count }}</h1>
  <button @click="state2.count++">증가(state2.count)</button>
</template>
<style scoped></style> -->

<!-- <script setup>
import { computed, ref } from "vue";
import Composition from "./components/Composition.vue";
import Option from "./components/Option.vue";
import Setup from "./components/Setup.vue";
</script>
<template>
  <Option />
  <Composition />
  <Setup />
</template>
<style scoped></style> -->

<!-- <script>
import Composition from "./components/Composition.vue";
import Option from "./components/Option.vue";
import Setup from "./components/Setup.vue";

export default {
  name: "App",
  components: {
    Option,
    Composition,
    Setup,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <Option />
  <Composition />
  <Setup />
</template>
<style scoped></style> -->

<!-- slot -->
<!-- <script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import Button from "./components/Button.vue";
export default {
  name: "App",
  components: {
    DefaultLayout,
    Button,
  },
  data() {
    return {
      slotName: "header",
      buttonText: "클릭",
    };
  },
};
</script>
<template>
  <Button v-slot="{ buttonText, count }">
    <span>{{ buttonText }} {{ count }}</span>
  </Button
  >
  <DefaultLayout>
    <template v-slot:[slotName]>
      <header>
        <h1>Header</h1>
      </header>
    </template>
    <template v-slot:default>
      <header>
        <h1>Main</h1>
      </header>
    </template>
    <template v-slot:footer>
      <header>
        <h1>Footer</h1>
      </header>
    </template>
  </DefaultLayout>
</template>
<style scoped>
span {
  color: red;
}
</style> -->
