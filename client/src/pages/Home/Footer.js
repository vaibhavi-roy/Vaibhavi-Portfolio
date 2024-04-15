import React from 'react'

function Footer() {
    return (
        <div className='py-10'>
            <div className='h-[1px] w-full bg-gray-100'></div>
            <div className='flex items-center justify-center flex-col mt-10 opacity-70'>
                <h1 className="text-white font-semibold" >
                    Designed and Developed By
                </h1>
                <h className="text-white" >
                    <span className="text-white font-semibold">Vaibhavi Roy</span>
                </h>
            </div >
        </div>
    )
}

export default Footer