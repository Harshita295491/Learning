import React from 'react'

function MyProfile() {
    return (
        <div className='w-[367px] h-[250px] '>
            <div className='w-full h-[50%] bg-[#E0F4FAAB] '>

            </div>
            <div className='flex flex-col w-full  relative bg-white '>
                <div className='absolute left-[140px] top-[-40px] flex items-center justify-center w-[90px] h-[90px] rounded-full bg-red-900 border-4 border-white'>
                    <p className='text-white text-2xl font-bold'>PS</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-16'>
                <p className='text-md font-semibold'>Priya Singh</p>
                <p className='text-sm text-gray-400'>Junior Software Engineer</p>

                </div>
                
            </div>


        </div>
    )
}

export default MyProfile