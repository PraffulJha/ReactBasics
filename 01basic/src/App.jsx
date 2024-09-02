// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username: "prafful",
    age: 21
  }
  let myObj2 = {
    username: "Manish",
    age: 22
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 rounded p-4'>Tailwind test</h1>
      <Card  someObj = "Work test" component ={myObj2} />
      <Card  someObj = "TEst complete" component = {myObj}/>
    </>
  )
}

export default App