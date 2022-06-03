export const getTodos=()=>{
    return {
        type:"GET_TODOS",
        payload:JSON.parse(localStorage.getItem("todo"))
    }
}

export const authStatus=()=>{
    return {
        type:"LOGIN_STATUS"
    }
}
export const logoutStatus=()=>{
    return {
        type:"LOGOUT_STATUS"
    }
}