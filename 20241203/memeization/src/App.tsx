import { useMemo } from "react";
import A from "./components/a";
import { initialItems } from "./Utils/util";

export default function App() {
  console.log("appRender");
  const selectedItems = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );
  return (
    <h1 className="text-3xl font-bold underline">
      App {selectedItems?.id}
      <A />
    </h1>
  );
}
