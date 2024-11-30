import React from 'react'
import backBtn from '../../../assets/back-btn.svg'
import crossIcon from '../../../assets/x.svg'
import downArrow from '../../../assets/down-arrow.svg'


function ProfileUpdateRequests() {
  return (
    <div className="w-full p-5 h-[100vh]">


      <h1 className="text-[30px] font-medium mb-6">Profile Update Requests</h1>

      <div className='w-full  flex justify-end'>
        <div className='w-[204px] h-[31px] bg-[#EDEEFF] flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <div className='w-8 h-8 flex items-center justify-center'><img src={backBtn} alt="" /></div>
            <h1 className='text-[#0008FF]'>Pending</h1>
          </div>
          <div className='flex'>
            <div className='w-8 h-8 flex items-center justify-center'><img src={crossIcon} alt="" /></div>
            <div className='w-8 h-8 flex items-center justify-center'><img src={downArrow} alt="" /></div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default ProfileUpdateRequests