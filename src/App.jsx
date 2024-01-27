import React, { useCallback, useEffect,useState } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[specialAllowed, setSpecialAllowed] = useState(false);

  const generatePassword=useCallback(()=>{
    let pass=""
    var str=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ"
    if(numberAllowed){str += "0123456789"}
    if(specialAllowed){str += "~!@#$%^&*(){}[]"}
    for(let i=1;i<length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,specialAllowed,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,specialAllowed,generatePassword])

  return (
    <>
  <div className="bg-gray-900 w-full h-screen flex flex-col items-center font-semibold ">
      <h1 className='text-orange-500 text-3xl mb-3'>Password Generator</h1>
        <input type="text" readOnly className='rounded-lg outline-none p-1 text-2xl w-max'value={password}/>
      <div className="flex flex-wrap mt-3 gap-2">
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
        <label className='text-white'>{length}</label>
        <input type="checkbox" defaultChecked={numberAllowed} onClick={()=>{setNumberAllowed((prev)=>!prev)}}/>
        <label className='text-white'>Numbers</label>
        <input type="checkbox" defaultChecked={specialAllowed} onClick={()=>{setSpecialAllowed((prev)=>!prev)}}/>
        <label className='text-white'>Special characters</label>
      </div>
      </div>
    </>
  )
}
export default App