import React from 'react'
import Task from './IndvTask'

function ListTask({tasks, onToggle, onDelete}) {

    
  return (
    <div className='task-container'>
        <h2>All Tasks</h2>
        {tasks.length === 0 ? (
            <p>No task Available</p>
        ) : (
            <div className='tasks-list'>
                {tasks.map((task) => (
                    <Task 
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    />
                ))}
            </div>
        )}
    </div>
  )
}

export default ListTask