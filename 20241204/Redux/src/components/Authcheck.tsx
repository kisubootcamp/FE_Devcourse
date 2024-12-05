import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
import {RootState} from "../store/store"
import { useDispatch } from "react-redux";



const default function AuthCheck({children}:{children: React.ReacNode}){
const user = useSelector((state: RootState) => state.auth.user)
  const isLoggedIn = useSelector ((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
    {isLoggedIn && children}
    {!isLoggedIn && (
      <button onClick={()=> dispatch({name: "james" age: 20}) } >
로그인
     </button>
    )}
    {isLoggedIn && (
 <button onClick={() => dispatch({})}>

    )}
    </>
  )

}