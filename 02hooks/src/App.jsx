import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);


  const addValue = ()=>{
    if(count < 20){
    setCount(count +1);
    }
  }

  const remveValue = ()=>{
    if(count > 0){
    setCount(count - 1);
    }
  }

  return (
  <>
  <p>counter value {count}</p>
  <button onClick={addValue}>
    add
  </button>
  <button onClick = {remveValue}> 
       remove
  </button>
  </>
  )
}

export default App
