import { useState , useContext } from "react"
import userContext from "../Context/UserContext"

function Login(){

    const myStyle = {
        display : 'flex',
        justifyContent:'center',
        flexDirection : 'row' ,
        backgroundColor : 'black'

    }

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(userContext)
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username , password})
    }
    return (
        
          <div style={{backgroundColor : 'black',
                       width : 1000
          }
                       }>
               
                < h2 style={{textAlign : 'center' , width : '100%' , marginTop : 0}}>Login</h2>
                <input type='text' placeholder="username"
                        value = {username} 
                        onChange={ (e)=> setUsername(e.target.value) } 
                />
                {" "}

                <input type = "password" placeholder="password"
                        value = {password}
                        onChange={ (e)=> setPassword(e.target.value) } 
                />

                <button  onClick={handleSubmit}> Submit</button>

          </div>
      
    )
}

export default Login