import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo('')
    }
    return (
        <form>
            <input className='bg-neutral-800 text-sm rounded p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-sky-400' type="text" placeholder='Enter a Todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className='text-sm p-2 px-4 bg-sky-800 rounded text-gray-300' onClick={(e) => handleSubmit(e)}>Add Todo</button>
        </form>
    )
}

export default TodoForm