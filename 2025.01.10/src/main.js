import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 수정된 부분

const app = createApp(App);
app.use(router);
app.mount("#app");
