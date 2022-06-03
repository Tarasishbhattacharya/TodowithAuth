import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { authStatus } from "../action"

 
 
 
 
 export const Login =()=>{
     const state=useSelector((state)=>state.Loginreducer)
     let dispatch=useDispatch();
     let navigate=useNavigate()
     const handlelogin=()=>{
         dispatch(authStatus())
        navigate("/")
     }

     return (
         <div>
            <button onClick={()=>{handlelogin()}}>login</button>
         </div>
     )
    
 }