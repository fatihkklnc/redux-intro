{/* Annova Software

File:counterActions.js

Contents: redux yapısında kullanılacak olan Actions mimarisi

History: 08.03.2021 FatihK
*/ }
import * as actionTypes from "./actionTyps";

export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})