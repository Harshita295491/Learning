
import React, { useState } from 'react';
import calender from "../../../../assets/calendar-date.svg"
import sms from "../../../../assets/sms.svg";
import phone from "../../../../assets/phone.svg";
import briefcase from "../../../../assets/briefcase-02.svg";
import { FaTimes } from 'react-icons/fa'; // Import cross icon from react-icons

function Education() {
  const [joiningDate, setJoiningDate] = useState("2024-10-07");
  const [dob, setDob] = useState("2002-03-30");


  const handleDateChange = (setter) => (event) => {
    setter(event.target.value);
  };


  return (
    <div className='w-full h-[100vh]'>
      

      <div className='w-full px-16 py-8'>
        <div className='flex justify-between'>
          <h1 className='text-[30px] font-medium'>Education </h1>


          <div className='flex gap-2'>
            <div className='px-10 py-2 bg-blue-500 rounded-lg'>
              <button className='text-white'>Add New</button>
            </div>
            <div className='px-10 py-2 bg-blue-500 rounded-lg'>
              <button className='text-white'>Edit</button>
            </div>
          </div>


        </div>

        <div className="max-w-7xl mx-auto mt-4">
          <h1 className='text-[20px]'>Education 1<span className='text-red-600'>*</span></h1>
          <form className="mt-6 grid grid-cols-3 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">Degree<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Address 1'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">College/University Name<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Address 2' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Specialization<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='City'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Start month/year<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Country' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Month/Year<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='State' />
            </div>



          </form>
          <h1 className='text-[20px] mt-8'>Education 2<span className='text-red-600'>*</span></h1>
          <form className="mt-6 grid grid-cols-3 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">Degree<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Address 1'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">College/University Name<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Address 2' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Specialization<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter City'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Start month/year<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Country' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Month/Year<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter State' />
            </div>



          </form>
        </div>
      </div>
    </div>
  );
}

export default Education
