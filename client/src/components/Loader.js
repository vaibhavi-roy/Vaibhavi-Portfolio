import React from 'react'

function Loader() {
    return (
        <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
            <div className='p-5 bg-primary gap-5 flex justify-between '>
                <h1 className='text-secondary text-8xl font-bold sm:text-6xl v'>V</h1>
                <h1 className='text-tertiary text-8xl font-bold sm:text-6xl r'>R</h1>
            </div>
        </div>
    )
}

export default Loader