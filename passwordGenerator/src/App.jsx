
import { useEffect } from 'react'
import { useState,useCallback ,useRef} from 'react'

function App() {
 const [length,setLength] = useState(4)
 const [numberAllowed,setNumberAllowed] = useState(false)
 const [splCharacterAllowed,setSplCharacterAllowed] = useState(false)
 const [password,setPassword] = useState("")

 // useRef hook
 const passwordRef = useRef(null)


 const passwordGenerator = useCallback(() => { // optimse the method which are dependent
  let pass  = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(splCharacterAllowed) str += '@#$%&*!'
  for (let index = 1; index <= length; index++) {
    let char = Math.floor(Math.random() * str.length +1)
    pass += str.charAt(char)
    
  }
  setPassword(pass)

 },[length,numberAllowed,splCharacterAllowed,setPassword])

 const copyToClipBoard =  useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,length-4)
  window.navigator.clipboard.writeText(password)} ,[password])

 useEffect(() => { passwordGenerator()},[length,numberAllowed,splCharacterAllowed,passwordGenerator]) // rerun when it called

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyToClipBoard}  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={4} max={16} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
        <label >Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}

      />
      <label >Number</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="splCharInput"
          onChange={() => {
              setSplCharacterAllowed((prev) => !prev);
          }}
      />
      <label >Special Characters</label>   
      </div>
      </div>
     </div>
    </>
  )
}

export default App
