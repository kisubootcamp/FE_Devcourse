import { CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CounterContext.Provider value={null}>{children}</CounterContext.Provider>
  );
}
