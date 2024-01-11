import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-300 p-3 rounded'>Vite with Tailwind</h1>
      <Card username='Sarah Dayan' designation='Staff Engineer' location='Algolia' img_src='https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <Card username='Sarah Dayane' location='Algolia' img_src='https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <Card/>
    </>
  )
}

export default App
