import { createApp } from "vue";
import App from "./App.vue";
import First from "./components/First.vue";
import Second from "./components/Second.vue";

const app = createApp(App);
// 전역 컴포넌트 등록방법
// app
//   .component("First", First)
//   .component("Second", Second);

app.mount("#app");
