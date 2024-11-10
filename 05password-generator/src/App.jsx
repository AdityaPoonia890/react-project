import { useState , useCallback , useEffect ,useRef} from 'react'
import './App.css'

// function  Change(){
//   document.querySelector('.passGen')
//                .value = "newPass";
// }


function App() {
  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState('')


  
  const passwrordGenerator = useCallback(()=>{
       let pass = "";
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       if(charAllowed === true){
        str +="!@#$%^&*()_+}{|?><";
       }
       if(numAllowed === true){
        str +="7894561320";
       }
       for(let i=1;i<=length;i++){
        let char = Math.floor(Math.random()*str.length+1);
        pass += str.charAt(char);
       } 
       setPassword(pass);  
   } , [length,numAllowed,charAllowed,setPassword]);

  const pass = useEffect(()=>{
   passwrordGenerator()
  } , [length , charAllowed , numAllowed ,setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  } , [password])

  return (
   
    <div className = "main-div">
      <p className='heading'>Password generator</p>
      <div className="password-input-container">
          <input
              type="text"
              value={password}
              className="password-input"
              placeholder="Password"
              readOnly
            // ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className='copy-button'>
            copy
          </button>    
      </div>
      <div className='option-container'>
        <div className='length-modifier'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          
          onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>
        <div className=" numberCheckBox" >
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
                setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className=" charCheckBox">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
   </div>
   
  )
}

export default App
