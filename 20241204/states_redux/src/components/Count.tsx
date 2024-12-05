import { useEffect } from "react";
import CountDetail from "./CountDetail";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { reset } from "../store/slice/counterSlice";

export default function Count() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  });
  return <CountDetail />;
}
