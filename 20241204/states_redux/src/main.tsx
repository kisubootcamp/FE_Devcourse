import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  // store(저장공간)의 데이터를 App과 연결
  <Provider store={store}>
    <App />
  </Provider>
);
