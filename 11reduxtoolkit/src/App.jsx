import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoForm, TodoItem } from './components'
import {useSelector} from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)

  return (
    <div className='container w-1/3 m-auto text-center pt-10'>
      <h1 className="text-2xl font-regular mb-4">
        Todo List
      </h1>
      <TodoForm />
      {
        todos.map((todo) =>
          <TodoItem key={todo.id} id={todo.id} text={todo.text} />
        )
      }

    </div>
  )
}

export default App
