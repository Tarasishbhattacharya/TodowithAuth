const initstate={
    list:[],
    login:false,
    logout:true,
}

export const Gettodoreducer=(state=initstate,action)=>{
    switch(action.type){
        case"GET_TODOS":{
            return {
                ...state,
                list:action.payload,
            }
        }
        default:return state
    }
}
export const Loginreducer=(state=initstate,action)=>{
    switch(action.type){
        case"LOGIN_STATUS":{
            return {
                ...state,
                login:true,
                logout:false
            }
        }
        case"LOGOUT_STATUS":{
            return {
                ...state,
                login:false,
                logout:true
            }
        }

        default:return state
    }
}

// export const Logoutreducer=(state=initstate,action)=>{
//     switch(action.type){
        
//         default:return state
//     }
// }

