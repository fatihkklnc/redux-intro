{/* Annova Software

File:reducers/index.js

Contents: Oluşturulan reducerlar combinlendi

History: 08.03.2021 FatihK
*/ }
import {combineReducers} from "redux";
import counterReducer from "./counterReducer"


 const reducers=combineReducers({
     counterReducer
 });
export default reducers;