/* Annova Software

File:configureStore.js

Contents: Combinlenen reducurlar createstore özelliği ile kullanıma hazır hale getirildi

History: 09.03.2021 FatihK
*/ 

import {createStore} from "redux";
import reducers from "./index";
 
export default function configureStore(){
    return createStore(reducers)
}