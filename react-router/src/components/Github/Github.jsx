 import { useState , useEffect , } from "react"
 import { useLoaderData } from "react-router-dom"
 
 export default function Github(){
/*   const [data , setData] = useState({})

  useEffect(() => {
     fetch('https://api.github.com/users/AdityaPoonia890')
     .then(response => response.json())
     .then(data => setData(data))
   } , [])*/

   const data = useLoaderData()
    
    
    return(
        <>
        <div className=" bg-orange-700 text-white flex justify-center p-8 h-96 items-center text-5xl
        ">
             your github followers : {data.followers}
             <img src="https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-32 ml-4"></img>

        </div>

        </>
    )
 }

 export const githubInfoLoader = async()=>{
  const response =  await fetch('https://api.github.com/users/AdityaPoonia890')
    
        return response.json()
  
 }