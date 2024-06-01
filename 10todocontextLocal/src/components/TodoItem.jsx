import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useTodo } from '../contexts'


const TodoItem = ({ todo }) => {
    const { id, completed } = todo

    const { updateTodo, toggleTodo, deleteTodo } = useTodo()

    const [todoText, setTodoText] = useState(todo.todo)
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
        if (isEdit) {
            updateTodo(id, {
                id, todo: todoText, completed
            })
        }
        setIsEdit((prev) => !prev)
    }

    const handleDelete = () => {
        deleteTodo(id)
    }

    const handleToggle = () => {
        toggleTodo(id)
    }

    return (
        <div className={`flex justify-between ${completed ? 'bg-green-300' : 'bg-pink-100'} p-1 px-2 mt-2 rounded-lg`} style={{ width: '26rem' }} >
            <div className="flex flex-row items-center">
                <input type="checkbox" name={`todo-${id}`} id={`todo-${id}`} checked={completed} onChange={handleToggle} />
                {
                    isEdit ? <input type='text' className='mx-2 bg-transparent w-full' value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                        : <label htmlFor={`todo-${id}`} className={`font-medium text-xs px-2 ${completed && 'line-through'}`}>{todoText}</label>
                }
            </div>
            <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={isEdit ? faFloppyDisk : faPencil} onClick={handleEdit} className={`p-2 rounded mr-2 bg-white text-xs ${isEdit ? 'text-gray-600' : 'text-orange-600'} cursor-pointer`} />
                <FontAwesomeIcon icon={faXmark} onClick={handleDelete} className='p-2 rounded mr-2 bg-white text-xs text-red-600 cursor-pointer' />
            </div>

        </div>
    )
}

export default TodoItem