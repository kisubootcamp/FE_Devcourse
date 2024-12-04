import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
// Provider는 무조건 한개만 있어야함 -> context 는 여러개가 있었지만 redux에서는 무조건 한개만
//  공급한 데이터를 사용하는것은 useSeletor를 사용
