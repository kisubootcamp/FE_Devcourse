import "./assets/css/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia().use(piniaPluginPersistedstate);

createApp(App) //
  .use(pinia)
  .mount("#app");
