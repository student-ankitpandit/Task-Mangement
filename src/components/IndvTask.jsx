import React from 'react'

function Task({task, onToggle, onDelete}) {
  return (
    <div className='flex items-center justfy-between p-4 mb-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow'>
      <div className='flex items-center gap-3'>
        <input 
        type="checkbox" 
        className='w-5 h-5 accent-blue-500 cursor-pointer'
        onChange={() => onToggle(task.id)}
        checked={task.completed}
        />

      <span className={task.completed ? 'line-through text-gray-500' : ''}>
        {task.title}
        </span>
        
        <button className='px-3 py-1 text-red-500 hover:bg-red-50 rounded-md text-right w-200' onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    </div>
  )
}

export default Task