import "./assets/css/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia(); // pinia 셋팅
const app = createApp(App);
app.use(pinia); // pinia 셋팅
app.mount("#app");
