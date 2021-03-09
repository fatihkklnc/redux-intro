
import {combineReducers} from "redux";
import counterReducer from "./counterReducer"
{/* Annova Software

File:reducers/index.js

Contents: Oluşturulan reducerlar combinlendi

History: 08.03.2021 FatihK
*/ }

 const reducers=combineReducers({
     counterReducer
 });
export default reducers;