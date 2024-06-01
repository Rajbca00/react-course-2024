import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const TodoItem = ({ id, text }) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-gray-800 p-2 m-2 rounded flex justify-between items-center'>
            <label className='text-sm text-gray-300 '>{text}</label>
            <FontAwesomeIcon icon={faTrash} className='text-xs p-2 px-4 bg-red-500 rounded' onClick={() => dispatch(removeTodo(id))} />
        </div>
    )
}

export default TodoItem