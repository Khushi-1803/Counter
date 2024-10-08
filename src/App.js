import { useState } from 'react'
//import logo from './logo.svg';
import './App.css';

function App() {
  let [counter,setCounter] = useState(15)
  //let counter =15
  const addValue = () => {
   counter=counter+1
   console.log("value is added",counter);
   setCounter(counter)
  }

   let [counterr,setCounterr] = useState(15)
   //let counter =15
   const removevalue= () => {
    counterr=counterr-1
    console.log("value is removed by 1",counterr);
    setCounterr(counterr)
    
  }

  return (
    <>
    <h1 id="h1">Hey I am a Counter</h1>
    <h2 id="h2">Counter value:{counter}</h2>
    <button id="button" onClick={addValue}>Add value {counter}</button>
    <br/>
    <button id="button2" onClick={removevalue}>Remove value {counterr}</button>
    </>
    

  );
}

export default App;
