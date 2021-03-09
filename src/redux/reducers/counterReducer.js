
import * as actionTypes from "../actions/actionTyps";
{/* Annova Software

File:counterActions.js

Contents: Reducer kullanarak basit state yönetimi yapıldı

History: 08.03.2021 FatihK
*/ }
const counterReducer = (state = 0, action) => {//reducer içerisinde veri tabanı bağlantısı kurulamaz içerisinde sadece basit state yönetimi yapılır.
    let newState;
    switch (action.type) {
        case actionTypes.DECREASE_COUNTER:
            return (newState = state + action.payload);
        case actionTypes.INCREASE_COUNTER:
            return (newState = state - action.payload); 
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload); 
        default:
            return state;
            
    }//gelen action değerine göre state değerindeki değişiklik switch ile kontrol edildi
}
export default counterReducer;