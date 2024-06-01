import React from 'react'
import { useTodo } from '../contexts'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { todos } = useTodo()
    console.log(todos)
    return (
        <div className='inline-block m-auto'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}

export default TodoList