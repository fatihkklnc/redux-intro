/* Annova Software

File:App.js

Contents: oluşturulan componentler çağrıldı

History: 10.03.2021 FatihK
*/ 
import React from 'react';
import Counter from "./components/Counter"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"
import ResetCounter from './components/ResetCounter';
function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseByTwoCounter></IncreaseByTwoCounter>
      <ResetCounter></ResetCounter>
    </div>
  );
}

export default App;
