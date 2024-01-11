import { useState } from 'react'
import Youtube from './Youtube.jsx'

function App() {
  const [count, setCount] = useState(0)

  const username = "rajesh";
  return (
    <>
      <h1>
        Vite react app
      </h1>
      <h1>
        Vite react app {username}
      </h1>
      <Youtube />
    </>
  )
}

export default App
