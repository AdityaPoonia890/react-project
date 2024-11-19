import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'

import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
  <UserContextProvider>
    <h1 style={{backgroundColor : 'black', marginBottom : 0}}>heylo</h1>
    <Login />
    <Profile />
  </UserContextProvider>
  )
}

export default App
