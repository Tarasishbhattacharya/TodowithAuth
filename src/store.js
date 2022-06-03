import { legacy_createStore as createStore } from "redux";
import { Rootreducer } from "./reducer";


export const Store=createStore(Rootreducer)