import React from 'react'

function SectionTitle({
    title,
}) {
    return (
        <div className='flex gap-10 items-center py-10'>
            <h1 className='text-3xl text-secondary font-semibold ml-2'>{title}</h1>
            <div className='w-60 h-[1.5px] bg-tertiary'></div>
        </div>
    )
}

export default SectionTitle