import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserProvider from './context/UserProvider'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <Login/>
      <Profile/>
    </UserProvider>
  )
}

export default App
