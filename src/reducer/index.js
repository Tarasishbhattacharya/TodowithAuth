import { combineReducers } from "redux";
import { Gettodoreducer } from "./Todoreducer";
import { Loginreducer } from "./Todoreducer";
// import { Logoutreducer } from "./Todoreducer";

export const Rootreducer=combineReducers({
    Gettodoreducer,
    Loginreducer,

})