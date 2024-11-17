 import React from "react"
 import { useParams } from "react-router-dom"
 
 export default function Users(){
    const {userId} = useParams()
    return (
        <>
        <div className="text-3xl bg-purple-700 text-white flex justify-center p-4">user : {userId}</div>
        </>
    )
}