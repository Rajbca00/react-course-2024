import { useState } from 'react'
import Card from './components/Card'
import Toggler from './components/Toggler'

function App() {

  return (
    <div className='container w-80 mx-auto'>
    <Toggler/>
    <Card/>
    </div>
  )
}

export default App
