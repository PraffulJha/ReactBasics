import { useState } from 'react';
import Learn from './Learn'
function App() {
  //let counter = 0
  //useState = responsible for changing of ui state 
  let [counter,setCounter] = useState(0)
  const addValue = () => {
      //counter++;
      setCounter(++counter)
      console.log("Clicked",counter);
  }
  const removeValue = () => {
    //counter++;
    if(counter > 0){
      --counter;
    }else {
      counter = 0;
    }
    setCounter(counter)
    console.log("Clicked",counter);
}
  return (
   
    <>
      <h1>
       Welcome to future
      </h1>
      <h2>Count : {counter}</h2>
      <button onClick={addValue} > Add button</button>
      <button onClick={removeValue}> Remove value</button>
      
    </>
  )
}

export default App
