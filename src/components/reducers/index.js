 import { combineReducers } from "redux"
 import questionBankReducer from "./questionBankReducer";

 export default combineReducers({
    question_list:questionBankReducer
 })