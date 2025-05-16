import React from 'react'

function Header() {
  return (
    <header className='bg-blue-600 text-white py-1 mb-8'>
        <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold'></h1> 
                    <p className='text-blue-100 mt-1'>Organize your task efficiently</p>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='text-right'>
                        <p className='text-sm text-blue-100'>Today's Date</p>
                        <p className='font-medium'>
                            {new Date().toLocaleDateString('en-IN', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
,                            })}
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </header>
  )
}

export default Header