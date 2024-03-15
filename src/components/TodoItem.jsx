import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({todo}) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const{updatedTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = ()=>{
      updatedTodo(todo.id,{...todo, todo:todoMsg})
      setIsTodoEditable(false)
    }

    const toggleCompleted = () =>{
      toggleComplete(todo.id)
    }

  return (
    <div 
    className={` flex border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-lg shadow-white/50 duration-300 text-black ${todo.completed? "bg-red/10" : "bg-pink/10"}`}
    >
      <input 
      type="checkbox"
      className='cursor-pointer'
      checked={todo.completed}
      onChange={toggleCompleted}
      />
       
       <input 
        type="text"
        className={`border outline-none w-full bg-white rounded-lg text-black ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
        value ={todoMsg}
        onChange= {(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        />

    <button
    className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
    onClick={() => {
      if(todo.completed) return;
      if(isTodoEditable){
        editTodo();
      } else setIsTodoEditable((prev => !prev));
    }}
    disabled={todo.completed}
    >
      {isTodoEditable ? "📁" : "✏️"}
    </button>

<button
 className = "inline-flex w-8 h-8 rounded-lg text -sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
 onClick={() =>deleteTodo(todo.id)}
>
❌
</button>

    </div>
  );
}

export default TodoItem;
