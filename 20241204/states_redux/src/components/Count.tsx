import { useEffect } from "react";
import { reset } from "../store/slice/counterSlice";
import CountDetail from "./CountDetail";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

export default function Count() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(reset());
  }, []);
  return <CountDetail />;
}
