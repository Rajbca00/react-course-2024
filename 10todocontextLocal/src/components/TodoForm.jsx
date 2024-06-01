import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit} className='flex m-auto justify-center'>
            <input type="text" placeholder='Write Todo...' className='w-96 text-xs font-medium p-2 rounded-lg rounded-tr-none rounded-br-none bg-slate-500' value={todo} onChange={(e)=> setTodo(e.target.value)}/>
            <button type='submit' className='bg-green-500 text-white p-2 rounded text-xs rounded-tl-none rounded-bl-none focus:border-gray-500'>Add</button>
        </form>
    )
}

export default TodoForm