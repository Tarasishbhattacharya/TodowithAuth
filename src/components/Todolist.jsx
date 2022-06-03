
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { getTodos } from "../action";



export const Todolist=()=>{
    const[detail,setDetail]=useState("")
    const tododata=JSON.parse(localStorage.getItem("todo"))||[];
    let dispatch=useDispatch()
    let state=useSelector((state)=>state.Gettodoreducer.list)

    useEffect(()=>{
      dispatch(getTodos())
    },[])

    const handlechange=(e)=>{
        setDetail(e.target.value)
    }

    const handleclick=(e)=>{
        e.preventDefault();
        const tododetail={
            id:new Date().getTime().toString(),
            data:detail
        }
        tododata.push(tododetail);
        localStorage.setItem("todo",JSON.stringify(tododata))
        dispatch(getTodos())
    }
    return (
         <>
        <div>
            <h2>Todo list....</h2>
            <input type="text" name="" id="" placeholder="Add your todo here" onChange={handlechange}/>
            <button onClick={handleclick}>Add</button>
        </div>
        {
            state.map((el)=>{
                return <div key={el.id}>
                    <p>{el.data}</p>
                </div>
            })
        }

        </>
    )
}