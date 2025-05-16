import React from 'react'
import { useState } from 'react'

function AddTask({onAdd}) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) { // Prevent adding empty tasks
            setError('Task cannot be empty');
            return;
        }

        if(title.length < 3) {
            setError('Task must be at least 3 characters long');
            return;
        }
          
        onAdd(title)
        setTitle(''); // Clear input field after submission
        setError(''); // Clear error message on successful submission
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className='mb-8'>
      <div className='flex gap-2'>
        <input 
        type="text" 
        value={title}
        onChange={(e) => {
          setTitle(e.target.value) // Update title state on input change
          setError('') // Clear error message on input change
        }}
        placeholder="Add a new task here..."
        className={`flex-1 p-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
        />

        <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200'
        disabled={!title.trim() || title.length < 3} // Disable button if title is empty or too short
        >
        Add Task
        </button>
      </div>
    </form>
    {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default AddTask