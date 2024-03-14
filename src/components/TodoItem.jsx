import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({todo}) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const{updatedTodo, deleteTodo, toggleComplete} = useTodo

  return (
    <div 
    className={` flex border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-lg shadow-white/50 duration-300 text-black ${todo.completed? "bg-red/10" : bg-pink/10}`}
    >
      
    </div>
  )
}

export default TodoItem
