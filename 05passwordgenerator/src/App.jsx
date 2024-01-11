import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [symbolsAllowed, setSymbolsAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) str += "0123456789"
    if (symbolsAllowed) str += "!@#$%^&*()_{}:<>?+"

    for (let i = 0; i < length; i++) {
      let pos = Math.floor(Math.random() * str.length + 1)
      pass += str[pos]
    }

    setPassword(pass)
  }, [length, numbersAllowed, symbolsAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numbersAllowed, symbolsAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white  text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={() => copyPassword()} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            name='length'
            id='length'
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor='length'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numbersAllowed}
            value={length}
            className='cursor-pointer'
            id='numbersAllowed'
            onChange={() => setNumbersAllowed((prev) => !prev)}
          />
          <label htmlFor='numbersAllowed'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={symbolsAllowed}
            value={length}
            className='cursor-pointer'
            id='symbolsAllowed'
            onChange={() => setSymbolsAllowed((prev) => !prev)}
          />
          <label htmlFor='symbolsAllowed'>Symbols</label>
        </div>
      </div>
    </div>
  )
}

export default App
