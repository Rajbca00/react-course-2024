import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const btnColors = ['Red', 'Blue', 'Green', 'Violet', 'Pink', 'Magenta', 'Orange']

  return (
    <div className='w-full h-screen bg-red-200 duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {btnColors.map((color) => (<button key={color} onClick={() => setColor(color)} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: color }}> { color }</button>))}
        </div>
    </div>
    </div >
  )
}

export default App
