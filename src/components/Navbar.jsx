import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logoutStatus } from "../action"
import "./Navbar.css"

export const Navbar=()=>{
    const state=useSelector((state)=>state.Loginreducer)
    let dispatch=useDispatch();
    let navigate=useNavigate()

    const handlelogout=()=>{
        dispatch(logoutStatus())
        navigate("/login")
    }
    return (
        <div className="nav_cont">
            <ul>
                <Link to="/"><li>Home</li></Link>
               {!state.login ? <Link to="/login"><li>login</li></Link>:<li onClick={()=>handlelogout()}>Logout</li>}
            </ul>
        </div>
    )
}