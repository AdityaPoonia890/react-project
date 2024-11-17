import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"

function Layout (){
return (
    <>

    <Header/>
   {/*    <div className="flex justify-center text-green-700">heylo eveyone</div>   */ } 
    <Outlet />
    <Footer />
    
    </>
)
}
export default Layout